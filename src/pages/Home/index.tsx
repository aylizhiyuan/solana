import React, { FC } from 'react'
import { Button, Form, Input } from 'antd-mobile'
import Logo from '@/assets/ARTTOO.png'
import MetaMask from '@/assets/metamask.png'
import Bjs from '@/assets/bjs.png'
import BjsAvatar from '@/assets/bjsAvatar.png'
import './index.scss'
const Home: FC = () => {
  return (
    <div className="homeContainer">
      <header>
        <nav className="nav">
          <img src={Logo} />
          <div className="oprations">
            <Button color="success" fill="solid">
              <img width="15" height="15" src={MetaMask} />
            </Button>
            <svg
              className="openMenu"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
        </nav>
      </header>
      <main className="main">
        <section className="banner">
          <img src={Bjs} />
          <p>
            <p>Art For All:</p>
            <p>Empowering Art, Uniting Hearts</p>
          </p>
          <ul>
            <li>Integration of Web3 technology into the traditional art market.</li>
            <li>Our financial interests are in perfect alignment with our investors.</li>
            <li>We possess decades of valuable experience in the high-end art market.</li>
            <li>Regulated by the FCA</li>
          </ul>
          <Button block color="success" fill="solid">
            Create Your Free Account
          </Button>
        </section>
        <section className="offering">
          <p>ARTTOO Offerings</p>
          <p>Investment Opportunities:</p>
          <ul className="list">
            <li>
              <div className="header">
                <img src={BjsAvatar} />
                <div className="desc">
                  <p>PABLO PICASSO</p>
                  <p>2022 Total Auction Sales</p>
                  <p>$434,563,272</p>
                  <p>2022 Auction Lots Sold</p>
                  <p>954</p>
                  <p>All Time Record Price</p>
                  <p>$90,000,000</p>
                </div>
              </div>
              <Button
                onClick={() => {
                  window.location.href = '#/detail'
                }}
                block
                color="success"
                fill="solid"
              >
                View Opportunity
              </Button>
            </li>
          </ul>
        </section>
        <section className="invest">
          <p>Why invest in art?</p>
          <p>
            Investing in blue-chip art has demonstrated robust performance, with an average annual growth rate of 8.9%
            since 2000 – more than three times the performance of the S&P 500, as reported by the ArtPrice 100© Index.
            Art's limited correlation with conventional investments positions it as a prudent addition to a diversified
            portfolio, a sentiment supported by 85% of wealth managers. ARTTOO specializes in Post-War & Contemporary
            Art, which has exhibited significantly stronger growth compared to the broader art market. The ArtPrice
            Contemporary Art Index has surged by over 358%, while the ArtPrice Post-War Art Index has seen a 267%
            increase since 1998.
          </p>
        </section>
        <section className="work">
          <p>How does it work?</p>
          <p>
            Traditionally, the pinnacle of the art market was reserved for the extremely affluent, characterized by
            substantial financial barriers for art acquisition, insurance, and storage. Additionally, gaining access to
            art could be challenging due to significant premiums at auctions and the exclusive nature of galleries,
            often accompanied by lengthy waiting lists.
          </p>
          <p>
            ARTTOO removes these barriers through fractional investment, allowing you to invest in multi-million-dollar
            art with a minimum investment of $100.
          </p>
        </section>
        <section className="why">
          <p>Why ARTTOO ?</p>
          <p>
            ARTTOO leverages Web3 technology to revolutionize conventional art investment, offering an aggregation
            trading platform, groundbreaking crowdfunding options, exclusive NFTs, and active community participation.
          </p>
          <p>
            Our team comprises seasoned professionals dedicated to crafting the most enticing investment prospects. The
            Art Investment Committee, boasting decades of expertise in the premier art market, employs advanced data
            analysis techniques to curate paintings with the greatest investment promise.
          </p>
          <p>
            Our operations remain under continuous regulatory oversight, ensuring the highest standards in risk
            management for financial investments. Furthermore, we've synchronized our financial interests with those of
            our investors, establishing an incentive structure tied to the profits realized from successful painting
            exits.
          </p>
        </section>
        <section className="message">
          <p>Subscribe to the ARTTOO Newsletter</p>
          <p>stay up-to-date with investing in art and the art of investing</p>
          <Input placeholder="name" />
          <Input placeholder="subname" />
          <Input placeholder="Email" />
          <Button block color="success" fill="solid">
            Subscribe
          </Button>
        </section>
      </main>
      <footer>
        <p>copyright@2023 ARTTOO</p>
      </footer>
    </div>
  )
}
export default Home
