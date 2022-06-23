import { fireEvent, getByText } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'
import { JSDOM } from 'jsdom'
import fs from 'fs'
import path from 'path'

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

let dom
let container

describe('Checkout', () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: 'dangerously' });
    container = dom.window.document.body;
  });
  it('Heading 1: 안드로이드 폰 구매', () => {
    const heading = container.querySelector('h2');
    expect(heading).toHaveTextContent('안드로이드 폰 구매');
  });

  it('Paragraph 1: 설명', () => {
    const paragraph = container.querySelector('p.lead');
    expect(paragraph).toHaveTextContent('안드로이드 폰 8 이후 모델을 보상 판매하고 ₩70,000 ~ ₩720,000 더 저렴하게*');
  })

  it('Input labels 한글로', () => {
    const labels = container.querySelectorAll('label.form-label');
    expect(labels[0]).toHaveTextContent('이름');
    expect(labels[1]).toHaveTextContent('성');
    expect(labels[2]).toHaveTextContent('깃허브 유저네임');
    expect(labels[3]).toHaveTextContent('Email');
    expect(labels[4]).toHaveTextContent('주소');
    expect(labels[5]).toHaveTextContent('주소 2');
    expect(labels[6]).toHaveTextContent('나라');
    expect(labels[7]).toHaveTextContent('주');
    expect(labels[8]).toHaveTextContent('우편번호');
    expect(labels[9]).toHaveTextContent('카드 이름');
    expect(labels[10]).toHaveTextContent('카드 번호');
    expect(labels[11]).toHaveTextContent('유효 기간');
    expect(labels[12]).toHaveTextContent('CVV');
  })

  it('Checkbox labels 한글로', () => {
    const labels = container.querySelectorAll('label.form-check-label');
    expect(labels[0]).toHaveTextContent('받는 주소가 결제 주소와 같습니다');
    expect(labels[1]).toHaveTextContent('다음을 위해 위 정보를 저장합니다');
    expect(labels[2]).toHaveTextContent('신용카드');
    expect(labels[3]).toHaveTextContent('체크카드');
    expect(labels[4]).toHaveTextContent('PayPal');
  })
})