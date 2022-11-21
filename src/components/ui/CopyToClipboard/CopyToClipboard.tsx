import { CopyOutlined } from '@ant-design/icons';
import { notification } from 'antd';
import { FC } from 'react';
import s from './CopyToClipboard.module.scss';

interface Props {
  value: string;
}

const CopyToClipboard: FC<Props> = ({ value }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(value);
    notification.info({ message: 'Copied to clipboard' });
  };
  return (
    <div className={s.container} onClick={copyToClipboard}>
      <CopyOutlined />
    </div>
  );
};

export default CopyToClipboard;
