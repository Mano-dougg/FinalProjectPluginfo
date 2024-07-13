import styled from "styled-components";
import { colors } from "@/assets/color";
import PrimaryInputSearchIcon from "./primary-input";
import CartControll from "./CartControll";
import { useEffect, useState } from "react";
import { createClient } from "@/prismicio";
import MenuBurger from "../home/componets/modalCategory";
import Link from "next/link";

interface HeaderProps {}

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px 50px;
  background-color: ${colors.black};

  @media screen and (max-width: 768px) {
    padding: 10px 20px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  width: 68%;
  position: relative;
`;

const Column1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;
`;

const Column2 = styled.div`
  display: flex;
  gap: 50px;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Logo = styled.a`
  font-family: "Karla", sans-serif;
  font-size: 55px;
  font-weight: 700;
  line-height: 64.3px;
  letter-spacing: 0.02em;
  text-align: left;
  color: ${colors.rose1};
  cursor: pointer;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    font-family: "Montserrat", sans-serif;
    font-size: 25px;
    font-weight: 700;
    line-height: 30.48px;
    text-align: left;
  }
`;

const MinhaConta = styled.a`
  width: 150px;
  white-space: nowrap;
  font-family: var(--oxygen-font);
  font-size: 1.5vw;
  font-weight: 700;
  line-height: 25.25px;
  letter-spacing: 0.08em;
  cursor: pointer;
  color: var(--white);

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Cupons = styled.p`
  font-family: var(--oxygen-font);
  text-align: center;
  font-size: 1vw;
  font-weight: 700;
  line-height: 18.94px;
  white-space: nowrap;
  color: var(--white);

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const ContainerMenu = styled.div`
  background: var(--rose1);
  border-radius: 60px;
  display: flex;
  flex-direction: row;
`;

const LinkContainer = styled.a``;

const ContainerMenu2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 35px;
`;

const TextColum2 = styled.p`
  font-family: var(--montserrat-font);
  font-size: 14px;
  font-weight: 500;
  line-height: 17.07px;
  letter-spacing: 0.08em;
  text-align: center;
  color: var(--white);
  cursor: pointer;

  &:hover {
    color: var(--rose2);
  }
`;

const Header: React.FC<HeaderProps> = () => {
  const [tagheader, setTagHeader] = useState<any | null>(null);

  useEffect(() => {
    const fetchTagHeader = async () => {
      const prismic = createClient();
      const response = await prismic.getByUID("tagheader", "main");
      setTagHeader(response.data);
    };

    fetchTagHeader();
  }, []);

  return (
    <TagHeader>
      <Column1>
        <Logo href="/">{tagheader?.logo}</Logo>
        <Container>
          <PrimaryInputSearchIcon placeholder="Pesquise na Shine..." />
          <MinhaConta>{tagheader?.acount}</MinhaConta>
          <Cupons>CUPONS DA LOJA/ <br />CUPONS</Cupons>
          <LinkContainer href="/cart">
            <CartControll />
          </LinkContainer>
        </Container>
      </Column1>

      <Column2>
        <ContainerMenu>
          <MenuBurger />
        </ContainerMenu>

        <ContainerMenu2>
          <Link href="/produtos" passHref>
            <TextColum2>PRODUTOS</TextColum2>
          </Link>
          <TextColum2>MARCAS</TextColum2>
          <TextColum2>CUPONS</TextColum2>
          <TextColum2>NACIONAL</TextColum2>
        </ContainerMenu2>
      </Column2>
    </TagHeader>
  );
};

export default Header;



// import styled from "styled-components";
// import { colors } from "@/assets/color";
// import PrimaryInputSearchIcon from "./primary-input";
// import CartControll from "./CartControll";
// import { useEffect, useState } from "react";
// import { createClient } from "@/prismicio";
// import MenuBurger from "../home/componets/modalCategory";
// import axios from "axios";

// interface HeaderProps {}

// const TagHeader = styled.header`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   flex-direction: column;
//   padding: 20px 50px;
//   background-color: ${colors.black};

//   @media screen and (max-width: 768px) {
//     padding: 10px 20px;
//   }
// `;

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 50px;
//   width: 68%;
//   position: relative;
// `;

// const Column1 = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   width: 100%;
//   position: relative;
// `;

// const Column2 = styled.div`
//   display: flex;
//   gap: 50px;
//   flex-direction: row;
//   align-items: center;

//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;

// const Logo = styled.a`
//   font-family: "Karla", sans-serif;
//   font-size: 55px;
//   font-weight: 700;
//   line-height: 64.3px;
//   letter-spacing: 0.02em;
//   text-align: left;
//   color: ${colors.rose1};
//   cursor: pointer;
//   text-decoration: none;

//   @media screen and (max-width: 768px) {
//     font-family: "Montserrat", sans-serif;
//     font-size: 25px;
//     font-weight: 700;
//     line-height: 30.48px;
//     text-align: left;
//   }
// `;

// const MinhaConta = styled.a`
//   width: 150px;
//   white-space: nowrap;
//   font-family: 'Oxygen', sans-serif;
//   font-size: 1.5vw;
//   font-weight: 700;
//   line-height: 25.25px;
//   letter-spacing: 0.08em;
//   cursor: pointer;
//   color: var(--white);

//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;

// const Cupons = styled.p`
//   font-family: 'Oxygen', sans-serif;
//   text-align: center;
//   font-size: 1vw;
//   font-weight: 700;
//   line-height: 18.94px;
//   white-space: nowrap;
//   color: var(--white);

//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;

// const ContainerMenu = styled.div`
//   background: var(--rose1);
//   border-radius: 60px;
//   display: flex;
//   flex-direction: row;
// `;

// const LinkContainer = styled.a``;

// const ContainerMenu2 = styled.div`
//   display: flex;
//   flex-direction: row;
//   gap: 35px;
// `;

// const TextColum2 = styled.a`
//   font-family: 'Montserrat', sans-serif;
//   font-size: 14px;
//   font-weight: 500;
//   line-height: 17.07px;
//   letter-spacing: 0.08em;
//   text-align: center;
//   color: var(--white);
//   cursor: pointer;

//   &:hover {
//     color: var(--rose2);
//   }
// `;

// const SearchResults = styled.div`
//   margin-left: -34vw;
//   width: 26vw;
//   max-height: 400px; 
//   overflow-y: auto; 
//   background-color: white;
//   border: 1px solid gray;
//   border-radius: 8px;
//   padding: 10px;
//   position: absolute;
//   top: calc(100% + 10px);
//   z-index: 99999;

//   @media (max-width: 768px) {
//     width: 30vw;
//   }
// `;


// const SearchResultItem = styled.div`
//   margin-bottom: 10px;
// `;

// const Header: React.FC<HeaderProps> = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState<any[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
//           params: {
//             api_key: 'ad1c12884f4a7421c3d9e6d859be97a9',
//             query: searchTerm,
//           },
//         });

//         setSearchResults(response.data.results);
//       } catch (error) {
//         console.error('Erro ao buscar filmes:', error);
//         setSearchResults([]);
//       }
//     };

//     if (searchTerm.trim() !== '') {
//       fetchData();
//     } else {
//       setSearchResults([]);
//     }
//   }, [searchTerm]);

//   const [tagheader, setTagHeader] = useState<any | null>(null);

//   useEffect(() => {
//     const fetchTagHeader = async () => {
//       const prismic = createClient();
//       const response = await prismic.getByUID("tagheader", "main");
//       setTagHeader(response.data);
//     };

//     fetchTagHeader();
//   }, []);

//   return (
//     <TagHeader>
//       <Column1>
//         <Logo href="/">{tagheader?.logo}</Logo>
//         <Container>
//           <PrimaryInputSearchIcon
//             placeholder="Pesquise na Shine..."
//             onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
//               setSearchTerm(event.target.value)
//             }
//           />

//           {searchTerm && (
//             <SearchResults>
//               {searchResults.map((movie: any) => (
//                 <SearchResultItem key={movie.id}>
//                   <h3>{movie.title}</h3>
//                   <p>{movie.overview}</p>
//                 </SearchResultItem>
//               ))}
//             </SearchResults>
//           )}

//           <MinhaConta>{tagheader?.acount}</MinhaConta>
//           <Cupons>CUPONS DA LOJA/ <br />CUPONS</Cupons>
//           <LinkContainer href="/cart">
//             <CartControll />
//           </LinkContainer>
//         </Container>
//       </Column1>

//       <Column2>
//         <ContainerMenu>
//           <MenuBurger />
//         </ContainerMenu>

//         <ContainerMenu2>
//           <TextColum2>PRODUTOS</TextColum2>
//           <TextColum2>MARCAS</TextColum2>
//           <TextColum2>CUPONS</TextColum2>
//           <TextColum2>NACIONAL</TextColum2>
//         </ContainerMenu2>
//       </Column2>
//     </TagHeader>
//   );
// };

// export default Header;
