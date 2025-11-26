import Skeleton from 'react-loading-skeleton';

export const CategoryCardSkeleton = () => {
  return (
    <div
      style={{
        borderRadius: '16px',
        overflow: 'hidden',
        height: 200,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '16px',
      }}
    >
      <Skeleton
        height={28}
        width="60%"
      />
      <Skeleton
        height={20}
        width="40%"
      />
    </div>
  );
};
