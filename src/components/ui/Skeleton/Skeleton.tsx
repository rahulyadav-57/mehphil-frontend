import { Skeleton as AntSkeleton } from 'antd';
import { FC } from 'react';
import s from './Skeleton.module.scss';

interface Props {
  isLoading: boolean;
  cardsPerRow?: 3 | 4 | 5;
  className?: string;
  type?: 'lines' | 'grid';
}

const Skeleton: FC<Props> = ({
  isLoading,
  cardsPerRow = 5,
  className,
  type = 'grid',
}) => {
  return (
    <>
      {isLoading && type === 'grid' && (
        <div className={`${s.listingItems} ${className}`}>
          {Array(cardsPerRow * 2)
            .fill(null)
            .map((_item, i) => (
              <div
                className={`${s.singleItems} ${s['item-' + cardsPerRow]}`}
                key={i}
              >
                <AntSkeleton.Avatar active={true} size="large" shape="square" />
              </div>
            ))}
        </div>
      )}
      {isLoading && type === 'lines' && <AntSkeleton active />}
    </>
  );
};

export default Skeleton;
