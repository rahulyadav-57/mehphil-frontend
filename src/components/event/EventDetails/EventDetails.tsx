import { CopyToClipboard } from '@/components/ui';
import { AppIcon } from '@/components/ui/icon';
import { AppConfig } from '@/config';
import { useEventActions } from '@/hooks';
import { formatAddress } from '@/utils/Misc';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, notification } from 'antd';
import moment from 'moment';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { MeetupEvent } from 'types';
import s from './EventDetails.module.scss';

const EventDetails: FC = () => {
  const [form] = Form.useForm();
  const eventActions = useEventActions();
  const [eventData, setEventData] = useState<MeetupEvent | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const { id: eventId } = router.query;

  const onFinish = (formValues: { ticketCount: number }) => {
    console.log(formValues, 'formValues');
  };

  const updateTicketCount = (updateBy = 1) => {
    const currentValue = +form.getFieldValue('ticketCount');
    const finalValue = currentValue + updateBy;
    if (finalValue > 5) {
      notification.error({
        message: 'Maximum 5 tickets is allowed',
        key: 'max-ticket-reached',
      });
      return;
    }
    if (finalValue <= 0) {
      return;
    }
    form.setFieldValue('ticketCount', currentValue + updateBy);
  };

  const getEventDetails = async () => {
    try {
      setIsLoading(true);
      const response = await eventActions.show(eventId?.toString()!!);

      setEventData(response.data.data);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const addToCalendar = () => {
    if (!eventData) {
      return;
    }

    const startDate = moment(eventData.eventAt).format(`yyyyMMDDTHH:mm:ss`);
    const endDate = moment(eventData.eventAt)
      .add(2, 'hours')
      .format(`yyyyMMDDTHH:mm:ss`);

    window.open(
      `https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${startDate}%2F${endDate}&details=${encodeURI(
        (eventData.description || '').slice(0, 100)
      )}&text=${encodeURI(eventData?.title || ' ')}`,
      '_blank'
    );
  };

  useEffect(() => {
    if (!eventId) {
      return;
    }
    getEventDetails();
  }, [eventId]);

  return (
    <>
      {eventData && (
        <div className={s.container}>
          <div className={`${s.column} ${s.columnLeft}`}>
            <div>
              <div className={s.hero}>
                <Image
                  src={
                    !eventData.thumbnail
                      ? '/images/layout/event-default.jpg'
                      : `${AppConfig.API_URL}/${eventData.thumbnail.path}`
                  }
                  width={1200}
                  height={400}
                  alt=""
                  className={`${s.thumbnail} image-cover`}
                />
                <div className={s.intro}>
                  <h1 className={`heading h5`}>{eventData.title}</h1>
                  <span className="color-light mt-10 d-block">
                    Organized by:{' '}
                    {formatAddress(eventData.createdBy.walletAddress)}{' '}
                    <CopyToClipboard
                      value={eventData.createdBy.walletAddress}
                    />
                  </span>
                </div>
              </div>
              {eventData.description && (
                <div className={`card-default mt-50`}>
                  <p>{eventData.description}</p>
                </div>
              )}
            </div>
          </div>
          <div className={`${s.column} ${s.columnRight}`}>
            <div className={`card-default`}>
              <div className={`flex ${s.row}`}>
                <AppIcon name="CalendarDefault" className={s.icon} />
                {moment(eventData.eventAt).format('MMM Do, YYYY (dddd)')}
              </div>
              <div className={`flex mt-10 ${s.row}`}>
                <AppIcon name="Clock" className={s.icon} />
                {moment(eventData.eventAt).format('LT')}
              </div>

              <div
                className={`ant-btn mt-30 ant-btn-bordered ant-btn-primary ${s.addToCalendar}`}
                onClick={addToCalendar}
              >
                <AppIcon name="Plus" /> Add to calendar
              </div>
            </div>
            <div className={`card-default mt-30`}>
              {eventData.address && (
                <div className={`flex ${s.row}`}>
                  <AppIcon name="MapMarker" className={s.icon} />
                  {eventData.address}
                </div>
              )}

              <Form
                form={form}
                onFinish={onFinish}
                layout="vertical"
                requiredMark="optional"
                className={s.bookingForm}
                initialValues={{ ticketCount: 1 }}
              >
                <div className={s.ticketCountWrapper}>
                  <div
                    className={s.circle}
                    onClick={() => {
                      updateTicketCount(-1);
                    }}
                  >
                    <MinusOutlined />
                  </div>

                  <Form.Item
                    name="ticketCount"
                    className="m-0"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input readOnly />
                  </Form.Item>
                  <div
                    className={s.circle}
                    onClick={() => {
                      updateTicketCount(1);
                    }}
                  >
                    <PlusOutlined />
                  </div>
                </div>

                <Button
                  className={`w-600 full-width ml-5 ${s.bookNow}`}
                  type="primary"
                  htmlType="submit"
                >
                  Book Now
                </Button>
              </Form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EventDetails;
