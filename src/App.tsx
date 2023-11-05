import ImageGallery from './components/imageGallery/ImageGallery';

export default function App() {
  // 'styles' object containing Tailwind CSS classes
  const styles = {
    appContainer: "bg-[#EBEFF5] min-h-screen p-5 sm:p-10"
  };

  return (
    <div className={styles.appContainer}>
      <ImageGallery />
    </div>
  );
}