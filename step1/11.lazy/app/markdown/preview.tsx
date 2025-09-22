interface PreviewProps {
  value: string;
}

const Preview = ({ value }: PreviewProps) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: value,
      }}
    />
  );
};

export default Preview;
