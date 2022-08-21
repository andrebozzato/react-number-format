import { useState } from 'react'
import NumberFormat from 'react-number-format'

export default function Home() {
  const [numero, setNumero] = useState()
  const [moeda, setMoeda] = useState(0)
  const [porcentagem, setPorcentagem] = useState(0.16)

  console.log({ numero, moeda, porcentagem })

  return (
    <div>
      <label>
        Moeda Real Brasileiro
        <NumberFormat
          fixedDecimalScale={true} // para ativar escala decimal
          decimalScale={2}
          decimalSeparator={','} // separador decimal
          thousandSeparator={'.'} // separador milhar
          prefix={'R$ '} // prefixo antes do numero
        />
      </label>

      <label>
        Número com 2 casas decimais
        <NumberFormat
          fixedDecimalScale={true} // para ativar escala decimal
          decimalScale={2}
          decimalSeparator={','} // separador decimal
          thousandSeparator={'.'} // separador milhar
        />
      </label>

      <label>
        Porcentagem
        <NumberFormat
          fixedDecimalScale={true} // para ativar escala decimal
          decimalScale={1}
          decimalSeparator={','} // separador decimal
          thousandSeparator={'.'} // separador milhar
          suffix={' %'} // prefixo antes do numero
        />
      </label>
    </div>
  )
}

{
  /* <div>
      <div className="example">
        <h3>Prefix and thousand separator : Format currency as text</h3>
        <NumberFormat
          value={2456981}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'R$ '}
        />
      </div>

      <div className="example">
        <h3>Format with pattern : Format credit card as text</h3>
        <NumberFormat
          value={4111111111111111}
          displayType={'text'}
          format="#### #### #### ####"
        />
      </div>

      <div className="example">
        <h3>Prefix and thousand separator : Format currency in input</h3>
        <NumberFormat
          thousandSeparator={true}
          prefix={'$'}
          className="some"
          inputmode="numeric"
        />
      </div>
      <div className="example">
        <h3>Custom thousand separator : Format currency in input</h3>
        <NumberFormat
          thousandSeparator={'.'}
          decimalSeparator={','}
          fixedDecimalScale={true}
          prefix={'R$ '}
        />
      </div>
      <div className="example">
        <h3>Format with pattern : Format credit card in an input</h3>
        <NumberFormat format="#### #### #### ####" />
      </div>

      <div className="example">
        <h3>Format with mask : Format credit card in an input</h3>
        <NumberFormat format="#### #### #### ####" mask="_" />
      </div>

      <div className="example">
        <h3>Custom format method : Format credit card expiry time</h3>
        <NumberFormat />
      </div>
      <div className="example">
        <h3>Format phone number</h3>
        <NumberFormat format="+1 (###) ###-####" mask="_" />
      </div>
      <div className="example">
        <h3>Show mask on empty input</h3>
        <NumberFormat
          format="+1 (###) ###-####"
          mask="_"
          allowEmptyFormatting
        />
      </div>
    </div> */
}
