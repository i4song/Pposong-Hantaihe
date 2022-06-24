import { fireEvent, getByText } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'
import { JSDOM } from 'jsdom'
import fs from 'fs'
import path from 'path'

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

let dom
let container

describe('Product', () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: 'dangerously' });
    container = dom.window.document.body;
  });

  it('Header: 홈, 가격, 쇼핑 카트', () => {
    const headers = container.querySelectorAll('a.py-2.d-none.d-md-inline-block');
    expect(headers.length).toEqual(3);
    expect(headers[0]).toHaveTextContent('홈');
    expect(headers[1]).toHaveTextContent('가격');
    expect(headers[2]).toHaveTextContent('쇼핑 카트');
  })

  it('Heading 1: 안드로메다 폰', () => {
    const heading = container.querySelector('h1.display-4.fw-normal');
    expect(heading).toHaveTextContent('안드로메다 폰');
  });

  it('Paragraph: 비약적으로 ...', () => {
    const paragraph = container.querySelector('p.lead.fw-normal');
    expect(paragraph).toHaveTextContent('비약적으로 강화된 카메라 시스템, 뛰어난 변동성으로 매일 하던 제스처에 전혀 새로운 감각을 선사하는 디스플레이. 스마트폰 사상 가장 빠른 칩. 독보적인 내구성. 획기적인 도약을 이뤄낸 배터리 성능까지.');
  });

  it('Button Color: 파,노,핑,초,빨', () => {
    const button = getByText(container, 'Coming soon');
    expect(button).toHaveStyle({
      backgroundColor: '#0d6efd'
    });
  });

  it('Heading 2: 안드로메다 폰, 안드로메다 폰 프로', () => {
    const heading2 = container.querySelectorAll('h2.display-5');
    expect(heading2[0]).toHaveTextContent('안드로메다 폰 13');
    expect(heading2[1]).toHaveTextContent('안드로메다 폰 13 Pro');
  });

  it('Paragraph 2: 가격 정보', () => {
    const paragraph2 = container.querySelectorAll('p.lead:not(.fw-normal)');
    expect(paragraph2[0]).toHaveTextContent('₩950,000부터');
    expect(paragraph2[1]).toHaveTextContent('이게 바로 프로');
    expect(paragraph2[2]).toHaveTextContent('₩1,350,000부터(보상 판매* 미적용 가격)');
  });

})