import { useEventActions } from '@/hooks';
import { Button, DatePicker, Form, Input, notification, Radio } from 'antd';
import moment from 'moment';
import Image from 'next/image';
import { FC, useState } from 'react';
import EventCard from '../EventCard';
import s from './EventCreate.module.scss';

const EventCreate: FC = () => {
  const [form] = Form.useForm();
  const eventActions = useEventActions();
  const [isLoading, setIsLoading] = useState(false);

  const onFinish = async (formValues: any) => {
    setIsLoading(true);

    try {
      const formData = {
        title: formValues.name,
        type: formValues.type,
        eventAt: formValues.date,
        description: formValues.description || '',
        address: formValues.address || '',
        latLong: {
          lat: formValues.lat,
          long: formValues.long,
        },
        meetingUrl: formValues.meetingUrl,
      };
      await eventActions.create(formData);
      notification.success({message: 'Event created'});
    } catch (error) {
      notification.error({message: 'Something went wrong'});
    } finally {
      setIsLoading(false);
    }
  };

  function disabledDate(current: Date) {
    // Can not select days before today and today
    return current && current.valueOf() < Date.now();
  }

  return (
    <>
      <Form
        form={form}
        onFinish={onFinish}
        layout="vertical"
        requiredMark="optional"
        className={s.bookingForm}
        initialValues={{
          type: 'In-Person',
        }}
      >
        <div className={s.container}>
          <div className={`${s.column} ${s.columnLeft}`}>
            <div className={`card-default`}>
              <span className="heading h6 w-500">Event Details</span>
              <div className={s.eventDetails}>
                <div>
                  <Image
                    src="/images/layout/event-default.jpg"
                    width={500}
                    height={240}
                    alt=""
                    className={`${s.thumbnail} image-cover`}
                  />
                  <Form.Item
                    name="date"
                    label="Date"
                    className="mt-15"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <DatePicker
                      className="ant-input"
                      format="YYYY-MM-DD HH:mm A"
                      disabledDate={(current) =>
                        current.isBefore(moment().subtract(1, 'day'))
                      }
                      showTime={{ defaultValue: moment('00:00:00', 'HH:mm A') }}
                    />
                  </Form.Item>
                </div>
                <div>
                  <Form.Item
                    name="name"
                    label="Event Name"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input placeholder="Mumbai web3 meetup" />
                  </Form.Item>
                  <Form.Item name="type" label="Type" className={s.eventType}>
                    <Radio.Group>
                      {['In-Person', 'Online'].map((item, i) => (
                        <Radio.Button value={item} key={i}>
                          {item}
                        </Radio.Button>
                      ))}
                    </Radio.Group>
                  </Form.Item>

                  <Form.Item shouldUpdate noStyle>
                    {() => {
                      return (
                        <>
                          {form.getFieldValue('type') === 'Online' && (
                            <Form.Item
                              name="meetingUrl"
                              label="Meeting URL"
                              rules={[
                                {
                                  required: true,
                                },
                              ]}
                            >
                              <Input placeholder="Ex. Gmeet, zoom url" />
                            </Form.Item>
                          )}
                          {form.getFieldValue('type') === 'In-Person' && (
                            <div>
                              <Form.Item
                                name="address"
                                label="Address"
                                rules={[
                                  {
                                    required: true,
                                  },
                                ]}
                              >
                                <Input placeholder="Andheri, Mumbai" />
                              </Form.Item>
                              <div className={s.mapCoordinate}>
                                <Form.Item
                                  name="lat"
                                  label="Latitude"
                                  rules={[
                                    {
                                      required: true,
                                    },
                                  ]}
                                >
                                  <Input placeholder="Latitude" />
                                </Form.Item>
                                <Form.Item
                                  name="long"
                                  label="Longitude"
                                  rules={[
                                    {
                                      required: true,
                                    },
                                  ]}
                                >
                                  <Input placeholder="Longitude" />
                                </Form.Item>
                              </div>
                            </div>
                          )}
                        </>
                      );
                    }}
                  </Form.Item>
                </div>
              </div>

              <Form.Item
                name="description"
                label="Description"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input.TextArea
                  placeholder="Some information about event"
                  rows={5}
                />
              </Form.Item>
            </div>
          </div>
          <div className={`${s.column} ${s.columnRight}`}>
            <span className="heading h6 w-500">Preview</span>

            <Form.Item shouldUpdate noStyle>
              {() => {
                return (
                  <>
                    <EventCard
                      className="mt-10"
                      data={{
                        name: form.getFieldValue('name'),
                        date: form.getFieldValue('date'),
                      }}
                    />
                    {/* <span>{form.getFieldValue('name')}</span> */}
                  </>
                );
              }}
            </Form.Item>

            <Button
              className={`w-600 full-width mt-20`}
              type="primary"
              htmlType="submit"
              loading={isLoading}
            >
              Create
            </Button>
          </div>
        </div>
      </Form>
    </>
  );
};

export default EventCreate;
