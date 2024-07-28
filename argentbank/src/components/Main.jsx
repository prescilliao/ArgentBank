import React from 'react'
import Chat from '../designs/img/icon-chat.png'
import Money from '../designs/img/icon-money.png'
import Security from '../designs/img/icon-security.png'
import MainCard from './MainCard.jsx'

function Main() {
  const datas = [
    {
      titre: "You are our #1 priority",
      image: Chat,
      description: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
    },
    {
      titre: "More savings means higher rates",
      image: Money,
      description: "The more you save with us, the higher your interest rate will be!"
    },
    {
      titre: "Security you can trust",
      image: Security,
      description: "We use top of the line encryption to make sure your data and money is always safe."
    }
  ]

  return (
    <div>
      <main>
        <div className="hero">
          <section className="hero-content">
            <h1 className="sr-only">Promoted Content</h1>
            <ol className="subtitle">No fees.</ol>
            <ol className="subtitle">No minimum deposit.</ol>
            <ol className="subtitle">High interest rates.</ol>
            <p className="text">Open a savings account with Argent Bank today!</p>
          </section>
        </div>
        <section className="features">
          <h2 className="sr-only">Features</h2>
          {datas.map((data, index) => (<MainCard key={index} data={data} />))}
        </section>
      </main>
    </div>
  )
}

export default Main