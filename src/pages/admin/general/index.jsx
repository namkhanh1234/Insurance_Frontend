import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp, faDongSign, faUserGroup } from '@fortawesome/free-solid-svg-icons';

import FormatCurrency from '../../../components/FormatCurrency/FormatCurrency';
import { ApiSummaryBeneficiary } from '../../../services/beneficiaryService';
import { ApiSummaryContract } from '../../../services/contractService';
import { ApiSummaryUser } from '../../../services/userService';
import { ApiGetPaymentContractHistory } from '../../../services/paymentContractService';
import { ApiSummaryPaymentRequest } from '../../../services/paymentRequestService';

function GeneralAdmin() {
    const [summaryContract, setSummaryContract] = useState({
        revenue: 0,
        rating: 0,
    });

    const [summaryUser, setSummaryUser] = useState({
        total: 0,
        rating: 0,
    });

    const [profitData, setProfitData] = useState([]);
    const [paymentData, setPaymentData] = useState([]);

    const [chartData, setChartData] = useState({
        options: {
            chart: {
                type: 'bar',
            },
            fill: {
                colors: ['#1d4ed8'],
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    borderRadius: 3,
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
                name: 'Số lượng',
                data: [],
            },
        ],
        xaxis: {
            type: 'category',
        },
    });

    const [mainChart, setMainChart] = useState({
        options: {
            chart: {
                height: 390,
                type: 'area',
                fontFamily: 'Inter, sans-serif',
                foreColor: '#6B7280',
                toolbar: {
                    show: false,
                },
            },
            fill: {
                type: 'gradient',
                gradient: {
                    enabled: true,
                    opacityFrom: 0.45,
                    opacityTo: 0,
                },
            },
            dataLabels: {
                enabled: false,
            },
            tooltip: {
                style: {
                    fontSize: '14px',
                    fontFamily: 'Inter, sans-serif',
                },
            },
            grid: {
                show: true,
                borderColor: '#F3F4F6',
                strokeDashArray: 1,
                padding: {
                    left: 35,
                    bottom: 15,
                },
            },
            markers: {
                size: 5,
                strokeColors: '#ffffff',
                hover: {
                    size: undefined,
                    sizeOffset: 3,
                },
            },
            xaxis: {
                type: 'category',
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                labels: {
                    style: {
                        colors: '#6B7280',
                        fontSize: '14px',
                        fontWeight: 500,
                    },
                },
                axisBorder: {
                    color: '#F3F4F6',
                },
                axisTicks: {
                    color: '#F3F4F6',
                },
                crosshairs: {
                    show: true,
                    position: 'back',
                    stroke: {
                        color: '#F3F4F6',
                        width: 1,
                        dashArray: 10,
                    },
                },
            },
            yaxis: {
                labels: {
                    style: {
                        colors: '#6B7280',
                        fontSize: '14px',
                        fontWeight: 500,
                    },
                    formatter: function (value) {
                        return FormatCurrency(value);
                    },
                },
            },
            legend: {
                fontSize: '14px',
                fontWeight: 500,
                fontFamily: 'Inter, sans-serif',
                labels: {
                    colors: '#6B7280',
                },
                itemMargin: {
                    horizontal: 10,
                },
            },
        },

        series: [
            {
                name: 'Doanh thu',
                data: [],
                color: '#1A56DB',
            },
            {
                name: 'Chi trả',
                data: [],
                color: '#FDBA8C',
            },
        ],
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

    const GetSummaryContract = async () => {
        const res = await ApiSummaryContract();

        if (res && res.data) {
            // console.log('>> Check api contract result: ', res.data);

            setSummaryContract({
                revenue: res.data.revenueCurrentMonth,
                rating: res.data.rateRevenueCurrentMonth,
            });
        }
    };

    const GetSummaryUser = async () => {
        const res = await ApiSummaryUser();

        if (res && res.data) {
            // console.log('>> Check api user result: ', res.data);

            setSummaryUser({
                total: res.data.total,
                rating: res.data.rating,
            });
        }
    };

    const GetSummaryProfitByYear = async () => {
        const today = new Date();
        const res = await ApiGetPaymentContractHistory({ year: today.getFullYear() - 1 });

        if (res && res.data) {
            // console.log('>> Check api payment contract history result: ', res.data);
            setProfitData(res.data);
        }
    };

    const GetSummaryPaymentByYear = async () => {
        const today = new Date();
        const res = await ApiSummaryPaymentRequest({ year: today.getFullYear() - 1 });

        if (res && res.data) {
            // console.log('>> Check api payment request history result: ', res.data);
            setPaymentData(res.data);
        }
    };

    useEffect(() => {
        GetSummaryBeneficiary();
        GetSummaryContract();
        GetSummaryUser();
        GetSummaryProfitByYear();
        GetSummaryPaymentByYear();
    }, []);

    return (
        <div className="general">
            <div className="w-full grid gap-4 grid-cols-3">
                <div className="w-full flex items-center justify-between px-6 py-3 bg-stone-50 border border-gray-200 rounded-lg shadow-sm">
                    <div className="w-full info space-y-2">
                        <div className="flex items-center justify-between">
                            <h3 className="text-base font-semibold text-gray-500">Tổng doanh thu</h3>
                            <FontAwesomeIcon icon={faDongSign} className="text-gray-400" />
                        </div>

                        <span className="text-xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">
                            {FormatCurrency(summaryContract?.revenue)}
                        </span>
                        <p className="flex items-center text-sm font-normal text-gray-500">
                            {summaryContract.rating > 0 ? (
                                <span className="flex items-center mr-1.5 text-base text-green-500">
                                    <FontAwesomeIcon icon={faArrowUp} className="mr-1" />
                                    {summaryContract?.rating} %
                                </span>
                            ) : (
                                <span className="flex items-center mr-1.5 text-base font-semibold text-red-600">
                                    <FontAwesomeIcon icon={faArrowDown} className="mr-1" />
                                    {summaryContract?.rating} %
                                </span>
                            )}
                            From last month
                        </p>
                    </div>
                    <div className="chart"></div>
                </div>
                <div className="w-full flex items-center justify-between px-6 py-3 bg-stone-50 border border-gray-200 rounded-lg shadow-sm">
                    <div className="w-full info space-y-2">
                        <div className="flex items-center justify-between">
                            <h3 className="text-base font-semibold text-gray-500">Người dùng</h3>
                            <FontAwesomeIcon icon={faUserGroup} className="text-gray-400" />
                        </div>

                        <span className="text-xl font-bold leading-none text-gray-900 sm:text-3xl">
                            {summaryUser?.total}
                        </span>
                        <p className="flex items-center text-sm font-normal text-gray-500">
                            {summaryUser?.rating > 0 ? (
                                <span className="flex items-center mr-1.5 text-base text-green-500">
                                    <FontAwesomeIcon icon={faArrowUp} className="mr-1" />
                                    {summaryUser?.rating} %
                                </span>
                            ) : (
                                <span className="flex items-center mr-1.5 text-base font-semibold text-red-600">
                                    <FontAwesomeIcon icon={faArrowDown} className="mr-1" />
                                    {summaryUser?.rating} %
                                </span>
                            )}
                            From last month
                        </p>
                    </div>
                    <div className="chart"></div>
                </div>
                <div className="flex flex-col px-6 py-3 bg-stone-50 border border-gray-200 rounded-lg shadow-sm">
                    <div className="info">
                        <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">Người thụ hưởng</h3>
                    </div>
                    <div className="chart">
                        <Chart options={chartData?.options} series={chartData?.series} type="bar" height="120" />
                    </div>
                </div>
            </div>
            <div className="mt-4 w-full grid gap-4 grid-cols-3">
                <div className="main-chart col-span-3 px-6 py-3 bg-stone-50 border border-gray-200 rounded-lg shadow-sm">
                    <h3 className="text-base font-semibold text-gray-500">Tổng quan</h3>
                    <Chart
                        options={mainChart?.options}
                        series={[
                            {
                                name: 'Doanh thu',
                                data: profitData,
                                color: '#1A56DB',
                            },
                            {
                                name: 'Chi trả',
                                data: paymentData,
                                color: '#FDBA8C',
                            },
                        ]}
                        type="area"
                        height="370"
                    />
                </div>
                {/* <div className="col-span-1 px-6 py-3 bg-stone-50 border border-gray-200 rounded-lg shadow-sm">
                    <h3 className="text-base font-semibold text-gray-500">Sản phẩm bán chạy</h3>
                </div> */}
            </div>
        </div>
    );
}

export default GeneralAdmin;
