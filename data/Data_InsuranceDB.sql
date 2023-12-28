﻿
GO
USE DB_Insurance
GO

--
-- INSERT DATA INSURANCE_TYPES
--
INSERT INTO insurance_types (NameInsuranceType) VALUES 
    (N'Đồng'),
    (N'Bạc'),
    (N'Titan'),
	(N'Vàng');
	--(N'Bạch Kim'),
	--(N'Kim Cương');


--
-- INSERT DATA INSURANCES
--
INSERT INTO insurances (NameInsurance, FromAge, ToAge, Price, Discount, InsuranceType_ID) VALUES
	(N'KNHcare gói Đồng', 0, 0, 1065000, 0, 1),
	(N'KNHcare gói Đồng', 1, 3, 710000, 0, 1),
	(N'KNHcare gói Đồng', 4, 6, 425200, 0, 1),
	(N'KNHcare gói Đồng', 7, 9, 390000, 0, 1),
	(N'KNHcare gói Đồng', 10, 18, 374000, 0, 1),
    (N'KNHcare gói Đồng', 19, 30, 358000, 0, 1),
	(N'KNHcare gói Đồng', 31, 40, 390000, 0, 1),
	(N'KNHcare gói Đồng', 41, 50, 406000, 0, 1),
	(N'KNHcare gói Đồng', 51, 60, 422000, 0, 1),
	(N'KNHcare gói Đồng', 61, 65, 550000, 0, 1);


INSERT INTO insurances (NameInsurance, FromAge, ToAge, Price, Discount, InsuranceType_ID) VALUES
	(N'KNHcare gói Bạc', 0, 0, 2130000, 0, 2), --
	(N'KNHcare gói Bạc', 1, 3, 1420000, 0, 2), --
	(N'KNHcare gói Bạc', 4, 6, 850400, 0, 2), --
	(N'KNHcare gói Bạc', 7, 9, 780000, 0, 2),
	(N'KNHcare gói Bạc', 10, 18, 748000, 0, 2), --
    (N'KNHcare gói Bạc', 19, 30, 716000, 0, 2), --
	(N'KNHcare gói Bạc', 31, 40, 780000, 0, 2), --
	(N'KNHcare gói Bạc', 41, 50, 812000, 0, 2), -- 
	(N'KNHcare gói Bạc', 51, 60, 844000, 0, 2), --
	(N'KNHcare gói Bạc', 61, 65, 1100000, 0, 2); --

INSERT INTO insurances (NameInsurance, FromAge, ToAge, Price, Discount, InsuranceType_ID) VALUES
	(N'KNHcare gói Titan', 0, 0, 4260000, 0, 3),
	(N'KNHcare gói Titan', 1, 3, 2840000, 0, 3),
	(N'KNHcare gói Titan', 4, 6, 1700800, 0, 3), --
	(N'KNHcare gói Titan', 7, 9, 1560000, 0, 3), --
	(N'KNHcare gói Titan', 10, 18, 1496000, 0, 3), --
    (N'KNHcare gói Titan', 19, 30, 1432000, 0, 3), --
	(N'KNHcare gói Titan', 31, 40, 1560000, 0, 3), --
	(N'KNHcare gói Titan', 41, 50, 1624000, 0, 3), --
	(N'KNHcare gói Titan', 51, 60, 1688000, 0, 3), --
	(N'KNHcare gói Titan', 61, 65, 2200000, 0, 3); --

INSERT INTO insurances (NameInsurance, FromAge, ToAge, Price, Discount, InsuranceType_ID) VALUES
	(N'KNHcare gói Vàng', 0, 0, 8681250, 0, 4),
	(N'KNHcare gói Vàng', 1, 3, 5787500, 0, 4),
	(N'KNHcare gói Vàng', 4, 6, 3495750, 0, 4),
	(N'KNHcare gói Vàng', 7, 9, 3212500, 0, 4),
	(N'KNHcare gói Vàng', 10, 18, 3083750, 0, 4),
    (N'KNHcare gói Vàng', 19, 30, 2955000, 0, 4),
	(N'KNHcare gói Vàng', 31, 40, 3212500, 0, 4),
	(N'KNHcare gói Vàng', 41, 50, 3341250, 0, 4),
	(N'KNHcare gói Vàng', 51, 60, 3470000, 0, 4),
	(N'KNHcare gói Vàng', 61, 65, 4500000, 0, 4);


--
-- INSERT DATA BENEFITS
--
INSERT INTO benefit_types (NameBenefitType) VALUES 
    (N'Chăm sóc sức khỏe'),
    (N'Sinh mạng cá nhân'),
    (N'Tai nạn cá nhân');

INSERT INTO benefits (NameBenefit, Period, BenefitType_ID)
VALUES
	(N'Điều trị nội trú', N'Năm', 1),
	(N'Điều trị nội trú do bệnh', N'Năm', 1),
	(N'Chi phí nằm viện (bao gồm cả điều trị trong ngày và điều trị cấp cứu có phát sinh chi phí giường)', N'Năm', 1),
	(N'Chi phí phẫu thuật', N'Năm', 1),
	(N'Phẫu thuật nội trú', N'Năm', 1),
	(N'Phẫu thuật ngoại trú', N'Năm', 1),
	(N'Phẫu thuật trong ngày', N'Năm', 1),
	(N'Phẫu thuật liên quan đến cấy ghép nội tạng (không bảo hiểm chi phí mua bộ phận và chi phí hiến)', N'Năm', 1),
	(N'Chi phí điều trị trước khi nhập viện/năm (tối đa 30 ngày trước khi nhập viện)', N'Năm', 1),
	(N'Chi phí điều trị ngay sau khi xuất viện trong vòng 30 ngày sau khi xuất viện/năm(tối đa 30 ngày kể từ ngày xuất viện)', N'Năm', 1),
	(N'Chi phí y tá chăm sóc tại nhà ngay sau khi xuất viện/năm (tối đa 15 ngày kể từ ngày xuất viện)', N'Năm', 1),
	(N'Dịch vụ xe cứu thương trong lãnh thổ Việt Nam (loại trừ bằng đường hàng không)', N'Năm', 1),
	(N'Trợ cấp nằm viện nội trú', N'Năm', 1),
	(N'Trợ cấp mai táng phí trong trường hợp tử vong tại bệnh viện', N'Năm', 1);

INSERT INTO benefits (NameBenefit, Period, BenefitType_ID)
VALUES
	(N'Tử vong, tàn tật toàn bộ vĩnh viễn do các bệnh lý/tình trạng theo danh sách tại Mục (*) Điều khoản bổ sung', N'Năm', 2),
	(N'Tử vong, tàn tật toàn bộ vĩnh viễn do bệnh khác', N'Năm', 2);

INSERT INTO benefits (NameBenefit, Period, BenefitType_ID)
VALUES
	(N'Tử vong, thương tật do tai nạn', N'Năm', 3),
	(N'Tử vong, thương tật toàn bộ vĩnh viễn do tai nạn', N'Năm', 3),
	(N'Chi phí y tế điều trị tai nạn', N'Năm', 3);


--
-- INSERT DATA BENEFIT_DETAILS
--

--
-- Gói đồng
--
INSERT INTO benefit_details (Benefit_ID, Insurance_ID, ClaimSettlementFee)
VALUES
	(1, 1, 12500000),
	(2, 1, 12500000),
	(3, 1, 12500000),
	(4, 1, 12500000),
	(5, 1, 12500000),
	(6, 1, 12500000),
	(7, 1, 12500000),
	(8, 1, 12500000),
	(9, 1, 625000),
	(10, 1, 625000),
	(11, 1, 625000),
	(12, 1, 12500000),
	(13, 1, 750000),
	(14, 1, 625000),
	--
	(15, 1, 12500000),
	(16, 1, 25000000),
	--
	(17, 1, 50000000),
	(18, 1, 50000000),
	(19, 1, 5000000);

INSERT INTO benefit_details (Benefit_ID, Insurance_ID, ClaimSettlementFee)
VALUES
	(1, 2, 12500000),
	(2, 2, 12500000),
	(3, 2, 12500000),
	(4, 2, 12500000),
	(5, 2, 12500000),
	(6, 2, 12500000),
	(7, 2, 12500000),
	(8, 2, 12500000),
	(9, 2, 625000),
	(10, 2, 625000),
	(11, 2, 625000),
	(12, 2, 12500000),
	(13, 2, 750000),
	(14, 2, 625000),
	--
	(15, 2, 12500000),
	(16, 2, 25000000),
	--
	(17, 2, 50000000),
	(18, 2, 50000000),
	(19, 2, 5000000);

INSERT INTO benefit_details (Benefit_ID, Insurance_ID, ClaimSettlementFee)
VALUES
	(1, 3, 12500000),
	(2, 3, 12500000),
	(3, 3, 12500000),
	(4, 3, 12500000),
	(5, 3, 12500000),
	(6, 3, 12500000),
	(7, 3, 12500000),
	(8, 3, 12500000),
	(9, 3, 625000),
	(10, 3, 625000),
	(11, 3, 625000),
	(12, 3, 12500000),
	(13, 3, 750000),
	(14, 3, 625000),
	--
	(15, 3, 12500000),
	(16, 3, 25000000),
	--
	(17, 3, 50000000),
	(18, 3, 50000000),
	(19, 3, 5000000);

INSERT INTO benefit_details (Benefit_ID, Insurance_ID, ClaimSettlementFee)
VALUES
	(1, 4, 12500000),
	(2, 4, 12500000),
	(3, 4, 12500000),
	(4, 4, 12500000),
	(5, 4, 12500000),
	(6, 4, 12500000),
	(7, 4, 12500000),
	(8, 4, 12500000),
	(9, 4, 625000),
	(10, 4, 625000),
	(11, 4, 625000),
	(12, 4, 12500000),
	(13, 4, 750000),
	(14, 4, 625000),
	--
	(15, 4, 12500000),
	(16, 4, 25000000),
	--
	(17, 4, 50000000),
	(18, 4, 50000000),
	(19, 4, 5000000);

INSERT INTO benefit_details (Benefit_ID, Insurance_ID, ClaimSettlementFee)
VALUES
	(1, 5, 12500000),
	(2, 5, 12500000),
	(3, 5, 12500000),
	(4, 5, 12500000),
	(5, 5, 12500000),
	(6, 5, 12500000),
	(7, 5, 12500000),
	(8, 5, 12500000),
	(9, 5, 625000),
	(10, 5, 625000),
	(11, 5, 625000),
	(12, 5, 12500000),
	(13, 5, 750000),
	(14, 5, 625000),
	--
	(15, 5, 12500000),
	(16, 5, 25000000),
	--
	(17, 5, 50000000),
	(18, 5, 50000000),
	(19, 5, 5000000);

INSERT INTO benefit_details (Benefit_ID, Insurance_ID, ClaimSettlementFee)
VALUES
	(1, 6, 12500000),
	(2, 6, 12500000),
	(3, 6, 12500000),
	(4, 6, 12500000),
	(5, 6, 12500000),
	(6, 6, 12500000),
	(7, 6, 12500000),
	(8, 6, 12500000),
	(9, 6, 625000),
	(10, 6, 625000),
	(11, 6, 625000),
	(12, 6, 12500000),
	(13, 6, 750000),
	(14, 6, 625000),
	--
	(15, 6, 12500000),
	(16, 6, 25000000),
	--
	(17, 6, 50000000),
	(18, 6, 50000000),
	(19, 6, 5000000);

INSERT INTO benefit_details (Benefit_ID, Insurance_ID, ClaimSettlementFee)
VALUES
	(1, 7, 12500000),
	(2, 7, 12500000),
	(3, 7, 12500000),
	(4, 7, 12500000),
	(5, 7, 12500000),
	(6, 7, 12500000),
	(7, 7, 12500000),
	(8, 7, 12500000),
	(9, 7, 625000),
	(10, 7, 625000),
	(11, 7, 625000),
	(12, 7, 12500000),
	(13, 7, 750000),
	(14, 7, 625000),
	--
	(15, 7, 12500000),
	(16, 7, 25000000),
	--
	(17, 7, 50000000),
	(18, 7, 50000000),
	(19, 7, 5000000);

INSERT INTO benefit_details (Benefit_ID, Insurance_ID, ClaimSettlementFee)
VALUES
	(1, 8, 12500000),
	(2, 8, 12500000),
	(3, 8, 12500000),
	(4, 8, 12500000),
	(5, 8, 12500000),
	(6, 8, 12500000),
	(7, 8, 12500000),
	(8, 8, 12500000),
	(9, 8, 625000),
	(10, 8, 625000),
	(11, 8, 625000),
	(12, 8, 12500000),
	(13, 8, 750000),
	(14, 8, 625000),
	--
	(15, 8, 12500000),
	(16, 8, 25000000),
	--
	(17, 8, 50000000),
	(18, 8, 50000000),
	(19, 8, 5000000);

INSERT INTO benefit_details (Benefit_ID, Insurance_ID, ClaimSettlementFee)
VALUES
	(1, 9, 12500000),
	(2, 9, 12500000),
	(3, 9, 12500000),
	(4, 9, 12500000),
	(5, 9, 12500000),
	(6, 9, 12500000),
	(7, 9, 12500000),
	(8, 9, 12500000),
	(9, 9, 625000),
	(10, 9, 625000),
	(11, 9, 625000),
	(12, 9, 12500000),
	(13, 9, 750000),
	(14, 9, 625000),
	--
	(15, 9, 12500000),
	(16, 9, 25000000),
	--
	(17, 9, 50000000),
	(18, 9, 50000000),
	(19, 9, 5000000);

INSERT INTO benefit_details (Benefit_ID, Insurance_ID, ClaimSettlementFee)
VALUES
	(1, 10, 12500000),
	(2, 10, 12500000),
	(3, 10, 12500000),
	(4, 10, 12500000),
	(5, 10, 12500000),
	(6, 10, 12500000),
	(7, 10, 12500000),
	(8, 10, 12500000),
	(9, 10, 625000),
	(10, 10, 625000),
	(11, 10, 625000),
	(12, 10, 12500000),
	(13, 10, 750000),
	(14, 10, 625000),
	--
	(15, 10, 12500000),
	(16, 10, 25000000),
	--
	(17, 10, 50000000),
	(18, 10, 50000000),
	(19, 10, 5000000);


--
-- Gói bạc
--
INSERT INTO benefit_details (Benefit_ID, Insurance_ID, ClaimSettlementFee)
VALUES
	(1, 11, 25000000),
	(2, 11, 25000000),
	(3, 11, 25000000),
	(4, 11, 25000000),
	(5, 11, 25000000),
	(6, 11, 25000000),
	(7, 11, 25000000),
	(8, 11, 25000000),
	(9, 11, 1250000),
	(10, 11, 1250000),
	(11, 11, 1250000),
	(12, 11, 25000000),
	(13, 11, 1500000),
	(14, 11, 1250000),
	--
	(15, 11, 25000000),
	(16, 11, 50000000),
	--
	(17, 11, 100000000),
	(18, 11, 100000000),
	(19, 11, 10000000);


INSERT INTO benefit_details (Benefit_ID, Insurance_ID, ClaimSettlementFee)
VALUES
	(1, 12, 25000000),
	(2, 12, 25000000),
	(3, 12, 25000000),
	(4, 12, 25000000),
	(5, 12, 25000000),
	(6, 12, 25000000),
	(7, 12, 25000000),
	(8, 12, 25000000),
	(9, 12, 1250000),
	(10, 12, 1250000),
	(11, 12, 1250000),
	(12, 12, 25000000),
	(13, 12, 1500000),
	(14, 12, 1250000),
	--
	(15, 12, 25000000),
	(16, 12, 50000000),
	--
	(17, 12, 100000000),
	(18, 12, 100000000),
	(19, 12, 10000000);

INSERT INTO benefit_details (Benefit_ID, Insurance_ID, ClaimSettlementFee)
VALUES
	(1, 13, 25000000),
	(2, 13, 25000000),
	(3, 13, 25000000),
	(4, 13, 25000000),
	(5, 13, 25000000),
	(6, 13, 25000000),
	(7, 13, 25000000),
	(8, 13, 25000000),
	(9, 13, 1250000),
	(10, 13, 1250000),
	(11, 13, 1250000),
	(12, 13, 25000000),
	(13, 13, 1500000),
	(14, 13, 1250000),
	--
	(15, 13, 25000000),
	(16, 13, 50000000),
	--
	(17, 13, 100000000),
	(18, 13, 100000000),
	(19, 13, 10000000);

INSERT INTO benefit_details (Benefit_ID, Insurance_ID, ClaimSettlementFee)
VALUES
	(1, 14, 25000000),
	(2, 14, 25000000),
	(3, 14, 25000000),
	(4, 14, 25000000),
	(5, 14, 25000000),
	(6, 14, 25000000),
	(7, 14, 25000000),
	(8, 14, 25000000),
	(9, 14, 1250000),
	(10, 14, 1250000),
	(11, 14, 1250000),
	(12, 14, 25000000),
	(13, 14, 1500000),
	(14, 14, 1250000),
	--
	(15, 14, 25000000),
	(16, 14, 50000000),
	--
	(17, 14, 100000000),
	(18, 14, 100000000),
	(19, 14, 10000000);

INSERT INTO benefit_details (Benefit_ID, Insurance_ID, ClaimSettlementFee)
VALUES
	(1, 15, 25000000),
	(2, 15, 25000000),
	(3, 15, 25000000),
	(4, 15, 25000000),
	(5, 15, 25000000),
	(6, 15, 25000000),
	(7, 15, 25000000),
	(8, 15, 25000000),
	(9, 15, 1250000),
	(10, 15, 1250000),
	(11, 15, 1250000),
	(12, 15, 25000000),
	(13, 15, 1500000),
	(14, 15, 1250000),
	--
	(15, 15, 25000000),
	(16, 15, 50000000),
	--
	(17, 15, 100000000),
	(18, 15, 100000000),
	(19, 15, 10000000);

INSERT INTO benefit_details (Benefit_ID, Insurance_ID, ClaimSettlementFee)
VALUES
	(1, 16, 25000000),
	(2, 16, 25000000),
	(3, 16, 25000000),
	(4, 16, 25000000),
	(5, 16, 25000000),
	(6, 16, 25000000),
	(7, 16, 25000000),
	(8, 16, 25000000),
	(9, 16, 1250000),
	(10,16, 1250000),
	(11, 16, 1250000),
	(12, 16, 25000000),
	(13, 16, 1500000),
	(14, 16, 1250000),
	--
	(15, 16, 25000000),
	(16, 16, 50000000),
	--
	(17, 16, 100000000),
	(18, 16, 100000000),
	(19, 16, 10000000);

INSERT INTO benefit_details (Benefit_ID, Insurance_ID, ClaimSettlementFee)
VALUES
	(1, 17, 25000000),
	(2, 17, 25000000),
	(3, 17, 25000000),
	(4, 17, 25000000),
	(5, 17, 25000000),
	(6, 17, 25000000),
	(7, 17, 25000000),
	(8, 17, 25000000),
	(9, 17, 1250000),
	(10, 17, 1250000),
	(11, 17, 1250000),
	(12, 17, 25000000),
	(13, 17, 1500000),
	(14, 17, 1250000),
	--
	(15, 17, 25000000),
	(16, 17, 50000000),
	--
	(17, 17, 100000000),
	(18, 17, 100000000),
	(19, 17, 10000000);

INSERT INTO benefit_details (Benefit_ID, Insurance_ID, ClaimSettlementFee)
VALUES
	(1, 18, 25000000),
	(2, 18, 25000000),
	(3, 18, 25000000),
	(4, 18, 25000000),
	(5, 18, 25000000),
	(6, 18, 25000000),
	(7, 18, 25000000),
	(8, 18, 25000000),
	(9, 18, 1250000),
	(10, 18, 1250000),
	(11, 18, 1250000),
	(12, 18, 25000000),
	(13, 18, 1500000),
	(14, 18, 1250000),
	--
	(15, 18, 25000000),
	(16, 18, 50000000),
	--
	(17, 18, 100000000),
	(18, 18, 100000000),
	(19, 18, 10000000);

INSERT INTO benefit_details (Benefit_ID, Insurance_ID, ClaimSettlementFee)
VALUES
	(1, 19, 25000000),
	(2, 19, 25000000),
	(3, 19, 25000000),
	(4, 19, 25000000),
	(5, 19, 25000000),
	(6, 19, 25000000),
	(7, 19, 25000000),
	(8, 19, 25000000),
	(9, 19, 1250000),
	(10, 19, 1250000),
	(11, 19, 1250000),
	(12, 19, 25000000),
	(13, 19, 1500000),
	(14, 19, 1250000),
	--
	(15, 19, 25000000),
	(16, 19, 50000000),
	--
	(17, 19, 100000000),
	(18, 19, 100000000),
	(19, 19, 10000000);

INSERT INTO benefit_details (Benefit_ID, Insurance_ID, ClaimSettlementFee)
VALUES
	(1, 20, 25000000),
	(2, 20, 25000000),
	(3, 20, 25000000),
	(4, 20, 25000000),
	(5, 20, 25000000),
	(6, 20, 25000000),
	(7, 20, 25000000),
	(8, 20, 25000000),
	(9, 20, 1250000),
	(10, 20, 1250000),
	(11, 20, 1250000),
	(12, 20, 25000000),
	(13, 20, 1500000),
	(14, 20, 1250000),
	--
	(15, 20, 25000000),
	(16, 20, 50000000),
	--
	(17, 20, 100000000),
	(18, 20, 100000000),
	(19, 20, 10000000);
--
-- Gói titan
--
INSERT INTO benefit_details (Benefit_ID, Insurance_ID, ClaimSettlementFee)
VALUES
	(1, 21, 50000000),
	(2, 21, 50000000),
	(3, 21, 50000000),
	(4, 21, 50000000),
	(5, 21, 50000000),
	(6, 21, 50000000),
	(7, 21, 50000000),
	(8, 21, 50000000),
	(9, 21, 2500000),
	(10, 21, 2500000),
	(11, 21, 2500000),
	(12, 21, 50000000),
	(13, 21, 3000000),
	(14, 21, 2000000),
	--
	(15, 21, 50000000),
	(16, 21, 100000000),
	--
	(17, 21, 200000000),
	(18, 21, 200000000),
	(19, 21, 20000000);

INSERT INTO benefit_details (Benefit_ID, Insurance_ID, ClaimSettlementFee)
VALUES
	(1, 22, 50000000),
	(2, 22, 50000000),
	(3, 22, 50000000),
	(4, 22, 50000000),
	(5, 22, 50000000),
	(6, 22, 50000000),
	(7, 22, 50000000),
	(8, 22, 50000000),
	(9, 22, 2500000),
	(10, 22, 2500000),
	(11, 22, 2500000),
	(12, 22, 50000000),
	(13, 22, 3000000),
	(14, 22, 2000000),
	--
	(15, 22, 50000000),
	(16, 22, 100000000),
	--
	(17, 22, 200000000),
	(18, 22, 200000000),
	(19, 22, 20000000);

INSERT INTO benefit_details (Benefit_ID, Insurance_ID, ClaimSettlementFee)
VALUES
	(1, 23, 50000000),
	(2, 23, 50000000),
	(3, 23, 50000000),
	(4, 23, 50000000),
	(5, 23, 50000000),
	(6, 23, 50000000),
	(7, 23, 50000000),
	(8, 23, 50000000),
	(9, 23, 2500000),
	(10, 23, 2500000),
	(11, 23, 2500000),
	(12, 23, 50000000),
	(13, 23, 3000000),
	(14, 23, 2000000),
	--
	(15, 23, 50000000),
	(16, 23, 100000000),
	--
	(17, 23, 200000000),
	(18, 23, 200000000),
	(19, 23, 20000000);

INSERT INTO benefit_details (Benefit_ID, Insurance_ID, ClaimSettlementFee)
VALUES
	(1, 24, 50000000),
	(2, 24, 50000000),
	(3, 24, 50000000),
	(4, 24, 50000000),
	(5, 24, 50000000),
	(6, 24, 50000000),
	(7, 24, 50000000),
	(8, 24, 50000000),
	(9, 24, 2500000),
	(10, 24, 2500000),
	(11, 24, 2500000),
	(12, 24, 50000000),
	(13, 24, 3000000),
	(14, 24, 2000000),
	--
	(15, 24, 50000000),
	(16, 24, 100000000),
	--
	(17, 24, 200000000),
	(18, 24, 200000000),
	(19, 24, 20000000);

INSERT INTO benefit_details (Benefit_ID, Insurance_ID, ClaimSettlementFee)
VALUES
	(1, 25, 50000000),
	(2, 25, 50000000),
	(3, 25, 50000000),
	(4, 25, 50000000),
	(5, 25, 50000000),
	(6, 25, 50000000),
	(7, 25, 50000000),
	(8, 25, 50000000),
	(9, 25, 2500000),
	(10, 25, 2500000),
	(11, 25, 2500000),
	(12, 25, 50000000),
	(13, 25, 3000000),
	(14, 25, 2000000),
	--
	(15, 25, 50000000),
	(16, 25, 100000000),
	--
	(17, 25, 200000000),
	(18, 25, 200000000),
	(19, 25, 20000000);

INSERT INTO benefit_details (Benefit_ID, Insurance_ID, ClaimSettlementFee)
VALUES
	(1, 26, 50000000),
	(2, 26, 50000000),
	(3, 26, 50000000),
	(4, 26, 50000000),
	(5, 26, 50000000),
	(6, 26, 50000000),
	(7, 26, 50000000),
	(8, 26, 50000000),
	(9, 26, 2500000),
	(10, 26, 2500000),
	(11, 26, 2500000),
	(12, 26, 50000000),
	(13, 26, 3000000),
	(14, 26, 2000000),
	--
	(15, 26, 50000000),
	(16, 26, 100000000),
	--
	(17, 26, 200000000),
	(18, 26, 200000000),
	(19, 26, 20000000);

INSERT INTO benefit_details (Benefit_ID, Insurance_ID, ClaimSettlementFee)
VALUES
	(1, 27, 50000000),
	(2, 27, 50000000),
	(3, 27, 50000000),
	(4, 27, 50000000),
	(5, 27, 50000000),
	(6, 27, 50000000),
	(7, 27, 50000000),
	(8, 27, 50000000),
	(9, 27, 2500000),
	(10, 27, 2500000),
	(11, 27, 2500000),
	(12, 27, 50000000),
	(13, 27, 3000000),
	(14, 27, 2000000),
	--
	(15, 27, 50000000),
	(16, 27, 100000000),
	--
	(17, 27, 200000000),
	(18, 27, 200000000),
	(19, 27, 20000000);

INSERT INTO benefit_details (Benefit_ID, Insurance_ID, ClaimSettlementFee)
VALUES
	(1, 28, 50000000),
	(2, 28, 50000000),
	(3, 28, 50000000),
	(4, 28, 50000000),
	(5, 28, 50000000),
	(6, 28, 50000000),
	(7, 28, 50000000),
	(8, 28, 50000000),
	(9, 28, 2500000),
	(10, 28, 2500000),
	(11, 28, 2500000),
	(12, 28, 50000000),
	(13, 28, 3000000),
	(14, 28, 2000000),
	--
	(15, 28, 50000000),
	(16, 28, 100000000),
	--
	(17, 28, 200000000),
	(18, 28, 200000000),
	(19, 28, 20000000);

INSERT INTO benefit_details (Benefit_ID, Insurance_ID, ClaimSettlementFee)
VALUES
	(1, 29, 50000000),
	(2, 29, 50000000),
	(3, 29, 50000000),
	(4, 29, 50000000),
	(5, 29, 50000000),
	(6, 29, 50000000),
	(7, 29, 50000000),
	(8, 29, 50000000),
	(9, 29, 2500000),
	(10, 29, 2500000),
	(11, 29, 2500000),
	(12, 29, 50000000),
	(13, 29, 3000000),
	(14, 29, 2000000),
	--
	(15, 29, 50000000),
	(16, 29, 100000000),
	--
	(17, 29, 200000000),
	(18, 29, 200000000),
	(19, 29, 20000000);

INSERT INTO benefit_details (Benefit_ID, Insurance_ID, ClaimSettlementFee)
VALUES
	(1, 30, 50000000),
	(2, 30, 50000000),
	(3, 30, 50000000),
	(4, 30, 50000000),
	(5, 30, 50000000),
	(6, 30, 50000000),
	(7, 30, 50000000),
	(8, 30, 50000000),
	(9, 30, 2500000),
	(10, 30, 2500000),
	(11, 30, 2500000),
	(12, 30, 50000000),
	(13, 30, 3000000),
	(14, 30, 2000000),
	--
	(15, 30, 50000000),
	(16, 30, 100000000),
	--
	(17, 30, 200000000),
	(18, 30, 200000000),
	(19, 30, 20000000);
--
-- Gói vàng
--

INSERT INTO benefit_details (Benefit_ID, Insurance_ID, ClaimSettlementFee)
VALUES
	(1, 31, 125000000),
	(2, 31, 125000000),
	(3, 31, 125000000),
	(4, 31, 125000000),
	(5, 31, 125000000),
	(6, 31, 125000000),
	(7, 31, 125000000),
	(8, 31, 125000000),
	(9, 31, 6250000),
	(10, 31, 6250000),
	(11, 31, 6250000),
	(12, 31, 125000000),
	(13, 31, 7500000),
	(14, 31, 2000000),
	--
	(15, 31, 125000000),
	(16, 31, 250000000),
	--
	(17, 31, 500000000),
	(18, 31, 500000000),
	(19, 31, 50000000);

INSERT INTO benefit_details (Benefit_ID, Insurance_ID, ClaimSettlementFee)
VALUES
	(1, 32, 125000000),
	(2, 32, 125000000),
	(3, 32, 125000000),
	(4, 32, 125000000),
	(5, 32, 125000000),
	(6, 32, 125000000),
	(7, 32, 125000000),
	(8, 32, 125000000),
	(9, 32, 6250000),
	(10, 32, 6250000),
	(11, 32, 6250000),
	(12, 32, 125000000),
	(13, 32, 7500000),
	(14, 32, 2000000),
	--
	(15, 32, 125000000),
	(16, 32, 250000000),
	--
	(17, 32, 500000000),
	(18, 32, 500000000),
	(19, 32, 50000000);

INSERT INTO benefit_details (Benefit_ID, Insurance_ID, ClaimSettlementFee)
VALUES
	(1, 33, 125000000),
	(2, 33, 125000000),
	(3, 33, 125000000),
	(4, 33, 125000000),
	(5, 33, 125000000),
	(6, 33, 125000000),
	(7, 33, 125000000),
	(8, 33, 125000000),
	(9, 33, 6250000),
	(10, 33, 6250000),
	(11, 33, 6250000),
	(12, 33, 125000000),
	(13, 33, 7500000),
	(14, 33, 2000000),
	--
	(15, 33, 125000000),
	(16, 33, 250000000),
	--
	(17, 33, 500000000),
	(18, 33, 500000000),
	(19, 33, 50000000);

INSERT INTO benefit_details (Benefit_ID, Insurance_ID, ClaimSettlementFee)
VALUES
	(1, 34, 125000000),
	(2, 34, 125000000),
	(3, 34, 125000000),
	(4, 34, 125000000),
	(5, 34, 125000000),
	(6, 34, 125000000),
	(7, 34, 125000000),
	(8, 34, 125000000),
	(9, 34, 6250000),
	(10, 34, 6250000),
	(11, 34, 6250000),
	(12, 34, 125000000),
	(13, 34, 7500000),
	(14, 34, 2000000),
	--
	(15, 34, 125000000),
	(16, 34, 250000000),
	--
	(17, 34, 500000000),
	(18, 34, 500000000),
	(19, 34, 50000000);

INSERT INTO benefit_details (Benefit_ID, Insurance_ID, ClaimSettlementFee)
VALUES
	(1, 35, 125000000),
	(2, 35, 125000000),
	(3, 35, 125000000),
	(4, 35, 125000000),
	(5, 35, 125000000),
	(6, 35, 125000000),
	(7, 35, 125000000),
	(8, 35, 125000000),
	(9, 35, 6250000),
	(10, 35, 6250000),
	(11, 35, 6250000),
	(12, 35, 125000000),
	(13, 35, 7500000),
	(14, 35, 2000000),
	--
	(15, 35, 125000000),
	(16, 35, 250000000),
	--
	(17, 35, 500000000),
	(18, 35, 500000000),
	(19, 35, 50000000);

INSERT INTO benefit_details (Benefit_ID, Insurance_ID, ClaimSettlementFee)
VALUES
	(1, 36, 125000000),
	(2, 36, 125000000),
	(3, 36, 125000000),
	(4, 36, 125000000),
	(5, 36, 125000000),
	(6, 36, 125000000),
	(7, 36, 125000000),
	(8, 36, 125000000),
	(9, 36, 6250000),
	(10, 36, 6250000),
	(11, 36, 6250000),
	(12, 36, 125000000),
	(13, 36, 7500000),
	(14, 36, 2000000),
	--
	(15, 36, 125000000),
	(16, 36, 250000000),
	--
	(17, 36, 500000000),
	(18, 36, 500000000),
	(19, 36, 50000000);

INSERT INTO benefit_details (Benefit_ID, Insurance_ID, ClaimSettlementFee)
VALUES
	(1, 37, 125000000),
	(2, 37, 125000000),
	(3, 37, 125000000),
	(4, 37, 125000000),
	(5, 37, 125000000),
	(6, 37, 125000000),
	(7, 37, 125000000),
	(8, 37, 125000000),
	(9, 37, 6250000),
	(10, 37, 6250000),
	(11, 37, 6250000),
	(12, 37, 125000000),
	(13, 37, 7500000),
	(14, 37, 2000000),
	--
	(15, 37, 125000000),
	(16, 37, 250000000),
	--
	(17, 37, 500000000),
	(18, 37, 500000000),
	(19, 37, 50000000);

INSERT INTO benefit_details (Benefit_ID, Insurance_ID, ClaimSettlementFee)
VALUES
	(1, 38, 125000000),
	(2, 38, 125000000),
	(3, 38, 125000000),
	(4, 38, 125000000),
	(5, 38, 125000000),
	(6, 38, 125000000),
	(7, 38, 125000000),
	(8, 38, 125000000),
	(9, 38, 6250000),
	(10, 38, 6250000),
	(11, 38, 6250000),
	(12, 38, 125000000),
	(13, 38, 7500000),
	(14, 38, 2000000),
	--
	(15, 38, 125000000),
	(16, 38, 250000000),
	--
	(17, 38, 500000000),
	(18, 38, 500000000),
	(19, 38, 50000000);

INSERT INTO benefit_details (Benefit_ID, Insurance_ID, ClaimSettlementFee)
VALUES
	(1, 39, 125000000),
	(2, 39, 125000000),
	(3, 39, 125000000),
	(4, 39, 125000000),
	(5, 39, 125000000),
	(6, 39, 125000000),
	(7, 39, 125000000),
	(8, 39, 125000000),
	(9, 39, 6250000),
	(10, 39, 6250000),
	(11, 39, 6250000),
	(12, 39, 125000000),
	(13, 39, 7500000),
	(14, 39, 2000000),
	--
	(15, 39, 125000000),
	(16, 39, 250000000),
	--
	(17, 39, 500000000),
	(18, 39, 500000000),
	(19, 39, 50000000);

INSERT INTO benefit_details (Benefit_ID, Insurance_ID, ClaimSettlementFee)
VALUES
	(1, 40, 125000000),
	(2, 40, 125000000),
	(3, 40, 125000000),
	(4, 40, 125000000),
	(5, 40, 125000000),
	(6, 40, 125000000),
	(7, 40, 125000000),
	(8, 40, 125000000),
	(9, 40, 6250000),
	(10, 40, 6250000),
	(11, 40, 6250000),
	(12, 40, 125000000),
	(13, 40, 7500000),
	(14, 40, 2000000),
	--
	(15, 40, 125000000),
	(16, 40, 250000000),
	--
	(17, 40, 500000000),
	(18, 40, 500000000),
	(19, 40, 50000000);