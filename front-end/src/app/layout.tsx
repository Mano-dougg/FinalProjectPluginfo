'use client'
import { inter, montserrat, karla, oxygen, playball, racing_sans_one, galada, mystery_quest } from '@/font/fonts';
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

interface Props {
  children: React.ReactNode;
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <html lang="pt-br">
        <body className={`${inter.variable} ${montserrat.variable} ${karla.variable} ${oxygen.variable} ${playball.variable} ${racing_sans_one.variable} ${galada.variable} ${mystery_quest.variable}`}>
          <Header />
          {children}
         <>
         
         </>
        </body>
      </html>
    </>
  );
};

export default RootLayout;
