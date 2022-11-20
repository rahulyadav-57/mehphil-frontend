import { Button, Checkbox, Form, Input } from 'antd';
import PhoneInput from 'react-phone-input-2';

import { FC } from 'react';
import s from './Checkout.module.scss';

const Checkout: FC = () => {
  const [form] = Form.useForm();
  const onFinish = (formValues: any) => {
    console.log(formValues, 'formValues');
  };

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
                <Form.Item name="phone" className="mt-35">
                  <Checkbox>Notify me on WhatsApp</Checkbox>
                </Form.Item>
                <div>
                  <Form.Item name="nftRequired" valuePropName="checked">
                    <Checkbox>{`I wan't NFT ticket also`}</Checkbox>
                  </Form.Item>

                  <Form.Item shouldUpdate noStyle>
                    {() => {
                      return (
                        <>
                          {form.getFieldValue('nftRequired') && (
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
                          )}
                        </>
                      );
                    }}
                  </Form.Item>
                </div>
              </div>
            </div>
            <div className={`card-default mt-30`}>
              <span className="heading h6 w-500">Additional Members</span>

              <div className={s.formGrid}>
                <Form.Item
                  name={['member', 0]}
                  label="Member 1"
                  className="m-0"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input placeholder="Enter  name" />
                </Form.Item>
                <Form.Item
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
                </Form.Item>
              </div>
            </div>
          </div>
          <div className={`${s.column} ${s.columnRight}`}>
            <div className={`card-default`}>
              <div>
                <span className="d-block color-light">Event:</span>
                <span className={`line-height-s ${s.value}`}>
                  Near Protocol Mumbai Meetup
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
                  Oct 31st, 2022 (Monday), <br /> 4PM UTC
                </span>
              </div>

              <div className={`separator-line ${s.separator}`} />
              <div className={s.priceWrapper}>
                {/* <span className="d-block color-light">Price:</span> */}
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
              </div>

              <Button
                className={`w-600 full-width mt-50 ${s.bookNow}`}
                type="primary"
                htmlType="submit"
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
