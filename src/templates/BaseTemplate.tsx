import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';

function BaseTemplate({
  children,
  withFooter = true,
}: {
  withFooter?: boolean;
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />

      <main>{children}</main>

      {withFooter && <Footer />}
    </>
  );
}

export default BaseTemplate;
