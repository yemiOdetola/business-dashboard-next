import React, { useState } from 'react';
import { ApexChart } from 'components/ui';

type ProductsBarType = {
  className?: string;
  labels: string[];
  products: number[];
};

const ProductsBar = ({ className, labels, products }: ProductsBarType) => {
  const [chartOptions, setChartOptions] = useState({
    options: {
      fill: {
        colors: ['#5341C4', '#3aa76d', '#FF0080']
      },
      colors: ['#5341C4', '#3aa76d', '#FF0080'],
      chart: {
        toolbar: {
          show: true,
        },
      },
      labels,
      stroke: {
        lineCap: 'round',
      },
      dataLabels: {
        style: {
          fontSize: '30px',
        },
      },
    },
    series: products,
  });

  return (
    <ApexChart
      className={className}
      options={chartOptions.options}
      series={chartOptions.series}
      type="radialBar"
      height="315"
    />
  );
};

export default ProductsBar;
