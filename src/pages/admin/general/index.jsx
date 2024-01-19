import classNames from 'classnames/bind';
import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

import styles from './General.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { ApiSummaryBeneficiary } from '../../../services/beneficiaryService';
import { set } from 'date-fns';

const cx = classNames.bind(styles);

function GeneralAdmin() {
    const [chartData, setChartData] = useState({
        options: {
            chart: {
                type: 'bar',
            },
            fill: {
                colors: ['#0891b2'],
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    borderRadius: 4,
                },
            },
            dataLabels: {
                enabled: false,
            },
            xaxis: {
                labels: {
                    show: false,
                },
            },
            yaxis: {
                labels: {
                    style: {
                        fontSize: '14px',
                        fontWeight: 300,
                    },
                },
            },
        },

        series: [
            {
                data: [],
            },
        ],
        xaxis: {
            type: 'category',
        },
    });

    const GetSummaryBeneficiary = async () => {
        const res = await ApiSummaryBeneficiary();

        if (res && res.data) {
            // console.log('>> Check api beneficiary result: ', res.data);

            setChartData({
                ...chartData,
                series: [
                    {
                        data: res.data,
                    },
                ],
            });
        }
    };

    useEffect(() => {
        GetSummaryBeneficiary();
    }, []);

    return (
        <div className="general">
            <div className="row w-full grid gap-4 grid-cols-3">
                <div className="flex items-center justify-between p-2 bg-stone-50 border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                    <div className="info space-y-2">
                        <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">Doanh thu</h3>
                        <span className="text-xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">
                            9.000.000 VND
                        </span>
                        <p className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
                            <span className="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
                                <FontAwesomeIcon icon={faArrowUp} />
                                12.5%
                            </span>
                            Since last month
                        </p>
                    </div>
                    <div className="chart"></div>
                </div>
                <div className="flex items-center justify-between p-2 bg-stone-50 border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                    <div className="info space-y-2">
                        <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">Người dùng</h3>
                        <span className="text-xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">
                            98
                        </span>
                        {/* <p className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
                            <span className="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
                                <FontAwesomeIcon icon={faArrowUp} />
                                12.5%
                            </span>
                            Since last month
                        </p> */}
                    </div>
                    <div className="chart"></div>
                </div>
                <div className="flex flex-col p-2 bg-stone-50 border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                    <div className="info space-y-2 ">
                        <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">Người thụ hưởng</h3>
                    </div>
                    <div className="chart">
                        <Chart options={chartData?.options} series={chartData?.series} type="bar" height="140" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GeneralAdmin;
