export async function getStaticProps() {
  return {
    props: {
      message: 'Message and email sent successfully!',
    },
  };
}

export default function HomePage({ message }) {
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}
