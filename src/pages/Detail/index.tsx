import React, { FC } from 'react'
import './index.scss'
import { Button, Form, Input } from 'antd-mobile'
import Logo from '@/assets/ARTTOO.png'
import Bjs from '@/assets/detail-img.jpeg'
import MetaMask from '@/assets/metamask.png'
import BjsAvatar from '@/assets/bjsAvatar.png'
const Detail: FC = () => {
  return (
    <div className="detailContainer">
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
        <p>Current Offerings</p>
        <ul>
          <li>
            <div className="item">
              <div className="title">
                <img src={BjsAvatar} />
                <span>Picasso</span>
              </div>
              <div className="pic">
                <img src={Bjs} />
                <p>
                  <i>Pablo Picasso, Autograph, original, oil on canvas.</i>
                  <p>Size: 40x60cm</p>{' '}
                  <p>
                    Picasso,who pursued innovation throughout his life, said, "I could paint as well as Raphael at the
                    age of 14, and after that I spent my whole life learning to paint like a child". Picasso advocated
                    cubism and then surrealism, and both styles are reflected in this work.
                  </p>
                </p>
                <Button block color="success">
                  Investment Thesis
                </Button>
              </div>
              <div className="date">
                <div className="left">
                  <p>Initial Offering Price</p>
                  <p>$24,000,000</p>
                </div>
                <div className="right">
                  <p>Offering Circular</p>
                  <p>SEC.GOV</p>
                </div>
              </div>
              <div className="charts"></div>
              <div className="more">
                <p>Price Appreciation of Similar Works</p>
                <p>17.7%</p>
                <ul>
                  <li>
                    <p>Sharpe Ratio</p>
                    <p>watch video</p>
                  </li>
                  <li>
                    <p>All Art</p>
                    <p>0.53</p>
                  </li>
                  <li>
                    <p>S&P 500</p>
                    <p>0.28</p>
                  </li>
                  <li>
                    <p>Alex Katz</p>
                    <p>0.59</p>
                  </li>
                </ul>
                <div className="process">
                  <div className="fix"></div>
                  <div className="at"></div>
                </div>
                <ul className="showColor">
                  <li>
                    <span>
                      <span className="cicle one"></span>Nontradable NFT
                    </span>
                    <span>60%</span>
                  </li>
                  <li>
                    <span>
                      <span className="cicle two"></span>Sold
                    </span>
                    <span>28%</span>
                  </li>
                  <li>
                    <span>
                      <span className="cicle three"></span>Available
                    </span>
                    <span>12%</span>
                  </li>
                </ul>
                <Button className="moreButton" block color="success" fill="solid">
                  MEMBERS ONLY
                </Button>
              </div>
            </div>
          </li>
        </ul>
      </main>
    </div>
  )
}
export default Detail
