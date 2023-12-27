
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


--
-- Gói titan
--


--
-- Gói vàng
--