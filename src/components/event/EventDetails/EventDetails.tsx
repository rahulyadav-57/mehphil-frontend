import { AppIcon } from '@/components/ui/icon';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, notification } from 'antd';
import Image from 'next/image';
import { FC } from 'react';
import s from './EventDetails.module.scss';

const EventDetails: FC = () => {
  const [form] = Form.useForm();

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

  return (
    <div className={s.container}>
      <div className={`${s.column} ${s.columnLeft}`}>
        <div className={s.hero}>
          <Image
            src="/images/layout/event-default.jpg"
            width={1200}
            height={400}
            alt=""
            className={`${s.thumbnail} image-cover`}
          />
          <div className={s.intro}>
            <h1 className={`heading h5`}>Near Protocol Mumbai Meetup</h1>
            <span className="color-light mt-10 d-block">
              Organized by: Rahul Yadav
            </span>
          </div>
        </div>
        <div className={`card-default mt-50`}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            magnam repellat illo, quisquam earum similique ad eos culpa
            assumenda dolore, sequi nostrum placeat, tempora ipsum fugit
            temporibus amet labore inventore.
          </p>
          <p className="mt-20">
            <b>Lorem ipsum dolor :</b> <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
            hic, id suscipit pariatur modi nobis? Esse, pariatur officiis soluta
            ut nemo nostrum cupiditate numquam explicabo harum nam, asperiores
            unde quaerat!
          </p>
        </div>
      </div>
      <div className={`${s.column} ${s.columnRight}`}>
        <div className={`card-default`}>
          <div className={`flex ${s.row}`}>
            <AppIcon name="CalendarDefault" className={s.icon} />
            Oct 31st, 2022 (Monday)
          </div>
          <div className={`flex mt-10 ${s.row}`}>
            <AppIcon name="Clock" className={s.icon} />
            4PM UTC
          </div>
          <div
            className={`ant-btn mt-30 ant-btn-bordered ant-btn-primary ${s.addToCalendar}`}
          >
            <AppIcon name="Plus" /> Add to calendar
          </div>
        </div>
        <div className={`card-default mt-30`}>
          <div className={`flex ${s.row}`}>
            <AppIcon name="MapMarker" className={s.icon} />
            Raymond Ground, Thane
          </div>
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
  );
};

export default EventDetails;
