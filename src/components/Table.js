import { useState } from 'react';
import './index.css';

const PAGE_SIZE = [10, 20, 50];

export const Table = ({ data }) => {
  const { products, total } = data;
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);

  return (
    <div
      style={{
        height: 600,
        borderRadius: 4,
        backgroundColor: '#FFFFFF',
        margin: 20,
      }}
    >
      <table className="table">
        <thead>
          <tr>
            <th>상품번호</th>
            <th>상품명</th>
            <th>브랜드</th>
            <th>상품내용</th>
            <th>가격</th>
            <th>평점</th>
            <th>재고</th>
          </tr>
        </thead>
        <tbody>
          {products
            .slice((page - 1) * pageSize, pageSize * page)
            .map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{item?.category}</td>
                <td>{item?.brand}</td>
                <td>
                  <div className="textOneLine">
                    <span>{item?.description}</span>
                  </div>
                </td>
                <td>{item?.price}</td>
                <td>{item?.rating}</td>
                <td>{item?.stock}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
