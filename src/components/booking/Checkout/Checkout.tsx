import { Button, Checkbox, Form, Input, notification } from 'antd';
import PhoneInput from 'react-phone-input-2';

import { useEventActions } from '@/hooks';
import { authState, bookingState } from '@/stores';
import moment from 'moment';
import Router from 'next/router';
import { FC, useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { MeetupEvent } from 'types';
import s from './Checkout.module.scss';

const Checkout: FC = () => {
  const [form] = Form.useForm();
  const [booking, setBookingState] = useRecoilState(bookingState);
  const auth = useRecoilValue(authState);
  const eventActions = useEventActions();
  const [isLoading, setIsLoading] = useState(false);

  const [eventData, setEventData] = useState<MeetupEvent | null>(null);

  const onFinish = async (formValues: any) => {
    console.log(formValues, 'formValues');

    const formData = {
      ...formValues,
      nftOpted: formValues.nftOpted ? true : false,
      ticketCount: booking?.ticketCount!!,
    };

    try {
      setIsLoading(true);

      const response: any = (
        await eventActions.bookTicket(booking?.eventId?.toString()!!, formData)
      ).data.data;

      notification.success({ message: 'Booking Successfull' });

      setBookingState((oldState: any) => {
        return {
          ...oldState,
          bookingId: response._id!!,
        };
      });
      Router.push('/booking/confirmed');
      console.log(response);
    } catch (error) {
      console.log(error, 'error');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!booking?.eventId || !booking.eventId || !auth?.accessToken) {
      notification.error({ message: 'Missing event details or not logged in' });
      Router.back();
      return;
    }
  }, []);

  return (
    <>
      <Form
        form={form}
        onFinish={onFinish}
        layout="vertical"
        requiredMark="optional"
        className={s.bookingForm}
      >
        <div className={s.container}>
          <div className={`${s.column} ${s.columnLeft}`}>
            <div className={`card-default`}>
              <span className="heading h6 w-500">Your Details</span>

              <div className={s.formGrid}>
                <Form.Item
                  name="name"
                  label="Name"
                  className="m-0"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input placeholder="Enter your name" />
                </Form.Item>
                <Form.Item
                  name="email"
                  label="Email"
                  className="m-0"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input placeholder="abc@gmail.com" />
                </Form.Item>

                <Form.Item name="phone" label="Phone">
                  <PhoneInput
                    inputClass="ant-input"
                    country={'us'}
                    enableSearch={true}
                    disableSearchIcon={true}
                    searchPlaceholder="Search"
                  />
                </Form.Item>
                <div></div>
                {/* <Form.Item name="phone" className="mt-35">
                  <Checkbox>Notify me on WhatsApp</Checkbox>
                </Form.Item> */}
                <div>
                  <Form.Item name="nftOpted" valuePropName="checked">
                    <Checkbox>{`I also need an NFT ticket`}</Checkbox>
                  </Form.Item>

                  <Form.Item shouldUpdate noStyle>
                    {() => {
                      return (
                        <>
                          {/* {form.getFieldValue('nftRequired') && (
                            <>
                              <Form.Item
                                name="walletAddress"
                                className="m-0"
                                rules={[
                                  {
                                    required: true,
                                  },
                                ]}
                              >
                                <Input placeholder="Enter wallet address" />
                              </Form.Item>
                              <p className="color-light">
                                * Wrong wallet address will lead to loss of nft
                              </p>
                            </>
                          )} */}
                          {form.getFieldValue('nftOpted') && (
                            <p className="color-light">
                              * NFT ticket will be sent to your web wallet{' '}
                              <br />
                              {auth?.address}
                            </p>
                          )}
                        </>
                      );
                    }}
                  </Form.Item>
                </div>
              </div>
            </div>
            {booking?.ticketCount!! > 1 && (
              <div className={`card-default mt-30`}>
                <span className="heading h6 w-500">Additional Members</span>

                <div className={s.formGrid}>
                  {Array(booking?.ticketCount!! - 1)
                    .fill('')
                    .map((_item, i) => (
                      <Form.Item
                        key={`member-${i}`}
                        name={['members', 0]}
                        label={`Member ${i + 1}`}
                        className="m-0"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                      >
                        <Input placeholder="Enter  name" />
                      </Form.Item>
                    ))}

                  {/* <Form.Item
                    name={['member', 1]}
                    label="Member 2"
                    className="m-0"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input placeholder="Enter name" />
                  </Form.Item> */}
                </div>
              </div>
            )}
          </div>
          <div className={`${s.column} ${s.columnRight}`}>
            <div className={`card-default`}>
              <div>
                <span className="d-block color-light">Event:</span>
                <span className={`line-height-s ${s.value}`}>
                  {eventData?.title}
                </span>
              </div>
              <div className="mt-20">
                <span className="d-block color-light">Venue:</span>
                <span className={`line-height-s ${s.value}`}>
                  Raymond Ground, Thane
                </span>
              </div>
              <div className="mt-20">
                <span className="d-block color-light">Date:</span>
                <span className={`line-height-s ${s.value}`}>
                  {moment(booking?.eventAt!!).format('MMM Do, YYYY (dddd)')},{' '}
                  <br /> {moment(booking?.eventAt!!).format('LT')}
                </span>
              </div>

              {/* <div className={`separator-line ${s.separator}`} />
              <div className={s.priceWrapper}>
                <div className={s.items}>
                  <span>Ticket x1</span>
                  <span>Rs. 2,000</span>
                </div>
                <div className={s.items}>
                  <span>NFT Ticket</span>
                  <span>+ Rs. 100</span>
                </div>
                <div className={s.items}>
                  <span>Total</span>
                  <span>Rs. 2,100</span>
                </div>
              </div> */}

              <Button
                className={`w-600 full-width mt-50 ${s.bookNow}`}
                type="primary"
                htmlType="submit"
                loading={isLoading}
              >
                Confirm
              </Button>
            </div>
          </div>
        </div>
      </Form>
    </>
  );
};

export default Checkout;
