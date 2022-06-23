import { fireEvent, getByText } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'
import { JSDOM } from 'jsdom'
import fs from 'fs'
import path from 'path'

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

let dom
let container

describe('Pricing', () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: 'dangerously' });
    container = dom.window.document.body;
  });

  it('Header label: 안드로이드 폰 가격', () => {
    const headerLabel = container.querySelector('span.fs-4');
    expect(headerLabel).toHaveTextContent('안드로이드 폰 가격'); 
  })

  it('Header: 홈, 가격, 쇼핑 카트', () => {
    const headers = container.querySelectorAll('a.py-2.text-dark.text-decoration-none');
    expect(headers.length).toEqual(3);
    expect(headers[0]).toHaveTextContent('홈');
    expect(headers[1]).toHaveTextContent('가격');
    expect(headers[2]).toHaveTextContent('쇼핑 카트');
  })

  it('Heading 1: 가격', () => {
    const heading = container.querySelector('h1.display-4.fw-normal');
    expect(heading).toHaveTextContent('가격');
  });

  it('Paragraph 1: 설명', () => {
    const paragraph = container.querySelector('p.fs-5.text-muted');
    expect(paragraph).toHaveTextContent('안드로이드 폰 8 이후 모델을 보상 판매하고 ₩70,000 ~ ₩720,000 더 저렴하게*');
  })

  it('Column: 2개, 각각 제목, 설명', () => {
    const columns = container.querySelectorAll('div.col');
    expect(columns.length).toEqual(2);

    const titles = container.querySelectorAll('h4.my-0.fw-normal');
    expect(titles.length).toEqual(2);
    expect(titles[0]).toHaveTextContent('안드로이드 폰 13');
    expect(titles[1]).toHaveTextContent('안드로이드 폰 13 Pro');

    const listContents = container.querySelectorAll('li:not(.mb-1)');
    expect(listContents.length).toEqual(6);
    expect(listContents[0]).toHaveTextContent('시에라 블루, 그래파이트, 골드, 실버, 알파인 그린');
    expect(listContents[1]).toHaveTextContent('Ceramic Shield 소재 전면');
    expect(listContents[2]).toHaveTextContent('동영상 재생:22시간');
    expect(listContents[3]).toHaveTextContent('시에라 블루, 그래파이트, 골드, 실버, 알파인 그린');
    expect(listContents[4]).toHaveTextContent('Ceramic Shield 소재 전면');
    expect(listContents[5]).toHaveTextContent('동영상 재생:22시간');
  })

  it('Comparing Table - th', () => {
    const ths = container.querySelectorAll('th');
    expect(ths.length).toEqual(5);
    expect(ths[1]).toHaveTextContent("안드로이드 폰 13");
    expect(ths[2]).toHaveTextContent("안드로이드 폰 13 Pro");
    expect(ths[3]).toHaveTextContent("가격");
    expect(ths[4]).toHaveTextContent("용량");
  })

  it('Comparing Table - td', () => {
    const tds = container.querySelectorAll('td');
    expect(tds.length).toEqual(4);
    expect(tds[0]).toHaveTextContent("₩950,000부터");
    expect(tds[1]).toHaveTextContent("₩1,350,000부터(보상 판매* 미적용 가격)");
    expect(tds[2]).toHaveTextContent("125GB - 1TB");
    expect(tds[3]).toHaveTextContent("125GB - 1TB");
  })


})