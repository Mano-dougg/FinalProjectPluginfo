
export async function updateCartProduct (id: number, quantidade: number) {
    const response = await fetch(`http://localhost:3030/updateCart/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ quantidade_carrinho: quantidade }),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.msg || 'Erro ao atualizar o carrinho');
    }
  
    const data = await response.json();
    return data;
  };
  