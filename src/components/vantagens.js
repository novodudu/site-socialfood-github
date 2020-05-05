import React from "react";

const Vantagens = (props) => {
  return (
    <div id="vantagens">
      <div class="conteudo-vantagens">
        <div>
          <div class="col-sm-4 vendas">
            <div className="icon-vendas"></div>
            <h1>Aumente suas vendas</h1>
            <h3>
              Use nosso aplicativo para aumentar suas ventas e seu faturamento.
            </h3>
          </div>
          <div class="col-sm-4 receba">
            <div className="icon-receba"></div>
            <h1>Receba em sua conta</h1>
            <h3>
              Aqui o pagamento das vendas entra direto em sua conta, sem
              intermediação do app.
            </h3>
          </div>
          <div class="col-sm-4 taxas">
            <div className="icon-taxas"></div>
            <h1>Sem taxa fixa todo mês</h1>
            <h3>
              Com a gente você não precisa pagar todos os meses uma taxa fixa
              para usar nosso app.
            </h3>
          </div>
        </div>
      </div>
      <div className="bt-vantagens"> Vamos nessa?</div>
      <div className="folha"></div>
    </div>
  );
};

export default Vantagens;
