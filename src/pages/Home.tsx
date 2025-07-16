import {
  AvatarsList,
  CardComponent,
  CustomChart,
  CustomTable,
  Header,
} from '@/components'
import { Container } from '@mui/material'
import { currencyConverter } from '@/utils'

function Home() {
  const mocklistData = [
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 1',
      subtitle: currencyConverter(12345.24),
    },
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 2',
      subtitle: currencyConverter(13445.33),
    },
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 3',
      subtitle: currencyConverter(15347.19),
    },
  ]

  const mockTableData = {
    headers: ['Name', 'Email', 'Actions'],
    rows: [
      [
        <span> Name 1</span>,
        <span>Name1@email.com</span>,
        <button>ACTION</button>,
      ],
      [
        <span> Name 2</span>,
        <span>Name2@email.com</span>,
        <button>ACTION</button>,
      ],
      [
        <span> Name 3</span>,
        <span>Name3@email.com</span>,
        <button>ACTION</button>,
      ],
    ],
  }

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponent>CARD</CardComponent>
        <CardComponent>
          <AvatarsList listData={mocklistData} />
        </CardComponent>
        <CardComponent>
          <CustomTable
            headers={mockTableData.headers}
            rows={mockTableData.rows}
          />
        </CardComponent>
        <CardComponent>
          <CustomChart
            labels={['Jan', 'Fev', 'Mar', 'Abr', 'Mai']}
            data={[1000.12, 2456.54, 986.32, 654.89, 754.89, 354.89]}
            type="bar"
          />
        </CardComponent>
      </Container>
    </>
  )
}

export default Home
