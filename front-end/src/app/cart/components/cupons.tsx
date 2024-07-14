import styled from "styled-components";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  height: 336px;
  background-color: var(--grey2);

  @media (max-width: 768px) {
    border-radius: 0;
    max-width:400px;
  }
`;

const Conteudo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  p {
    margin: 0;
  }

  hr {
    border: none;
    border-top: 1px solid #ccc;
    margin: 10px 0;
  }
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Label = styled.label`
  font-family: var(--montserrat-font);
  font-weight:  700;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  font-family: var(--montserrat-font);
  padding: 8px 10px;
  background-color: var(--rose1);
  color: white;
  border: none;
  border-radius: 60px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight:700;

  &:hover {
    background-color: #0056b3;
  }
`;

const FecharPedidoButton = styled(Button)`
  font-family: var(--montserrat-font);
    margin-top: -20px;
  background-color: var(--rose2); 
  &:hover {
    background-color:var(--rose1);
  }
`;
const TextCupon = styled.div`
font-family: var(--montserrat-font);
font-size: 13px;
font-weight: 600;
line-height: 24.38px;
letter-spacing: 0.05em;
text-align: left;

`

interface CuponsProps {
  cartTotal: number;
}

export const Cupons: React.FC<CuponsProps> = ({ cartTotal }) => {
  return (
    <Container>
      <Conteudo>
        <div>
          <Label>Possui cupom?</Label>
        </div>
        <InputGroup>
          <InputWrapper>
            <Input type="text" placeholder="Digite aqui" />
          </InputWrapper>
          <Button>OK</Button>
        </InputGroup>
        <div>
          <Label>Calcular frete</Label>
        </div>
        <InputGroup>
          <InputWrapper>
            <Input type="text" placeholder="Digite aqui" />
          </InputWrapper>
          <Button>OK</Button>
        </InputGroup>
        <div>
          <TextCupon>SUB-TOTAL: R$ {(cartTotal).toFixed(2)}</TextCupon>
          <TextCupon>Frete: R$ 10,00</TextCupon>
          <hr />
          <TextCupon>Total: R$ {(cartTotal + 10).toFixed(2)}</TextCupon>
          <hr />
        </div>
        <FecharPedidoButton>Fechar Pedido</FecharPedidoButton>
      </Conteudo>
    </Container>
  );
}

export default Cupons;
