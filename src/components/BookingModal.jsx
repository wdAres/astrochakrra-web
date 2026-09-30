import { useEffect, useState } from 'react';
import { Form, Input, Modal, Select } from 'antd';
import { siteData } from '../data/siteData';
import { useBooking } from '../context/BookingContext';
import { submitBooking } from '../api/booking';
import { IconClose, Lotus } from './icons';

const groupedOptions = siteData.booking.options.reduce((groups, option) => {
  const group = groups.find((g) => g.label === option.group);
  if (group) {
    group.options.push({ value: option.id, label: option.label });
  } else {
    groups.push({
      label: option.group,
      options: [{ value: option.id, label: option.label }],
    });
  }
  return groups;
}, []);

export default function BookingModal() {
  const { open, closeBooking, selectedService } = useBooking();
  const { booking } = siteData;
  const [form] = Form.useForm();
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (open) {
      setStatus('idle');
      form.setFieldsValue({
        name: undefined,
        email: undefined,
        query: undefined,
        service: selectedService,
      });
    }
  }, [open, selectedService, form]);

  const onFinish = async (values) => {
    setStatus('submitting');
    try {
      await submitBooking(values);
      setStatus('success');
      form.resetFields();
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <Modal open={open} onCancel={closeBooking} footer={null} centered destroyOnClose>
      <div className="relative px-6 py-8 md:px-10">
        <button
          type="button"
          onClick={closeBooking}
          className="absolute right-5 top-5 text-navy/70 hover:text-navy"
          aria-label="Close"
        >
          <IconClose className="h-5 w-5" />
        </button>

        {status === 'success' ? (
          <div className="py-8 text-center">
            <Lotus className="mx-auto h-16 w-16 text-gold" />
            <h3 className="display mt-6 text-4xl text-navy">{booking.successTitle}</h3>
            <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-muted">{booking.successCopy}</p>
            <button type="button" className="btn-line mt-8" onClick={closeBooking}>
              Close
            </button>
          </div>
        ) : (
          <>
            <Lotus className="h-12 w-12 text-gold" />
            <h3 className="display mt-4 text-4xl text-navy">{booking.title}</h3>
            <p className="mt-3 max-w-md text-sm leading-6 text-muted">{booking.subtitle}</p>

            <Form form={form} layout="vertical" onFinish={onFinish} className="mt-8" requiredMark={false}>
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please share your name.' }]}
              >
                <Input placeholder="Your full name" />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: 'Please share your email.' },
                  { type: 'email', message: 'Enter a valid email address.' },
                ]}
              >
                <Input placeholder="you@email.com" />
              </Form.Item>
              <Form.Item
                label="Service"
                name="service"
                rules={[{ required: true, message: 'Please choose a service.' }]}
              >
                <Select
                  placeholder="Select a service or package"
                  options={groupedOptions}
                  popupClassName="booking-select"
                />
              </Form.Item>
              <Form.Item
                label="Query"
                name="query"
                rules={[{ required: true, message: 'A short note helps us prepare.' }]}
              >
                <Input.TextArea placeholder="What would you like guidance on?" autoSize={{ minRows: 3, maxRows: 6 }} />
              </Form.Item>

              {status === 'error' ? (
                <p className="mb-4 text-sm text-red-800">Something went quiet on our side. Please try again.</p>
              ) : null}

              <button type="submit" className="btn-fill w-full" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending…' : booking.submit}
              </button>
            </Form>
          </>
        )}
      </div>
    </Modal>
  );
}
