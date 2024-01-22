
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


-- INSERT DATA USER
EXEC RegisterUser N'AnhQuan@example.com', 'password_1', N'Lý Anh Quân', '1234567890', N'Nam', '1990-01-01', '123456789';
EXEC RegisterUser N'KimTuyen@gmail.com', 'password_1', N'Hoàng Kim Tuyền', N'9876543210', N'Nữ', '1985-11-25', N'886377666';
EXEC RegisterUser N'HuuLuong@gmail.com', 'password_1', N'Quang Hữu Lương', N'5552223333', N'Nam', '2002-01-05', N'888777666';
EXEC RegisterUser N'AnhDao@gmail.com', 'password_1', N'Võ Anh Ðào', N'4441112222', N'Nữ', '1995-09-14', N'999000111';
EXEC RegisterUser N'DacThanh@gmail.com', 'password_1', N'Nguyễn Ðắc Thành', N'9998887777', N'Nam', '1990-07-02', N'222333444';
EXEC RegisterUser N'NguyenLan@gmail.com', 'password_1', N'Bành Nguyệt Lan', N'1112223334', N'Nữ', '1988-12-18', N'555666777';
EXEC RegisterUser N'NamThanh@gmail.com', 'password_1', N'Hoàng Nam Thanh', N'6667778888', N'Nam', '2001-04-09', N'111222333';
EXEC RegisterUser N'KhanhVi@gmail.com', 'password_1', N'Nghiêm Khánh Vi', N'1239876543', N'Nữ', '1993-06-30', N'444555666';
EXEC RegisterUser N'KhacVu@gmail.com', 'password_1', N'Đỗ Khắc Vũ', N'7894561230', N'Nam', '1980-02-12', N'666555444';
EXEC RegisterUser N'QuynhNhung@gmail.com', 'password_1', N'Huỳnh Quỳnh Nhung', N'3216549870', N'Nam', '1998-08-22', N'123789456';
EXEC RegisterUser N'VietCuong@gmail.com', 'password_1', N'Vũ Việt Cương', N'9871234560', N'Nam', '1987-10-05', N'789456123';
EXEC RegisterUser N'ThyVan@gmail.com', 'password_1', N'Văn Thy Vân', N'6547893210', N'Nữ', '1994-04-15', N'456789012';
EXEC RegisterUser N'DucToan@gmail.com', 'password_1', N'Hoàng Ðức Toản', N'Nam', N'ChrisC', '1976-07-28', N'987012345';
EXEC RegisterUser N'ThachTho@gmail.com', 'password_1', N'Nguyễn Thạch Thảo', N'4567890123', N'Nữ', '1983-01-03', N'654321789';
EXEC RegisterUser N'ChiKien@gmail.com', 'password_1', N'Tôn Chí Kiên', N'4567890123', N'Nam', '1987-09-03', N'913545876';


-- INSERT DATA BENEFICIARY
INSERT INTO [dbo].[beneficiaries] (
    [email],
    [full_name],
    [phone],
    [sex],
    [date_of_birth],
    [card_identification],
    [image_identification_url],
    [address],
    [relationship_policyholder],
    [user_id]
)
VALUES
('AnhQuan@example.com', N'Lý Anh Quân', '1234567890', N'Nam', '1990-01-01', '064902056675', NULL, N'Quận 1 Đồng Nai', N'Bản thân', 6),
('KimTuyen@example.com', N'Hoàng Kim Tuyền', '9876543210', N'Nữ', '1985-11-25', '064902056676', NULL, N'Huyện Đoàn Khôi Hà Nội', N'Cha/Mẹ', 7),
('HuuLuong@example.com', N'Quang Hữu Lương', '5556667777', N'Nam', '1982-11-30', '064902056677', NULL, N'Huyện Nhiệm Lâm Đồng', N'Anh/Chị', 8),
('AnhDao@example.com', N'Võ Anh Ðào', '3334445555', N'Nữ', '1995-03-22', '064902056678', NULL, N'Huyện Dao Di Nam Định', N'Vợ/Chồng', 9),
('DacThanh@example.com', N'Nguyễn Ðắc Thành', '1112223333', N'Nam', '1988-07-10', '064902056679', NULL, N'Huyện Vi Sử Đồng Tháp', N'Con', 10),
('NguyetLam@example.com', N'Bành Nguyệt Lan', '9998887777', N'Nữ', '1992-09-05', '064902056685', NULL, N'Huyện Thi Quảng Nam', N'Bản thân', 11),
('NamThanh@example.com', N'Hoàng Nam Thanh', '4445556666', N'Nam', '2012-04-18', '064902056695', NULL, N'Huyện Đỗ Minh Thiện Hà Nam', N'Cha/Mẹ', 12),
('KhanhVi@example.com', N'Nghiêm Khánh Vi', '7778889999', N'Nữ', '1997-12-25', '064902056775', NULL, N'Huyện Lỳ Dương Đài Nghệ AN', N'Anh/Chị', 13),
('KhacVu@example.com', N'Đỗ Khắc Vũ', '6667778888', N'Nam', '1998-06-08', '064902056875', NULL, N'Quận Cát Ninh Bình', N'Vợ/Chồng', 14),
('QuynhNhung@example.com',  N'Huỳnh Quỳnh Nhung', '2223334444', N'Nữ', '1991-02-14', '064902056975', NULL, N'Thôn Hoàng Vỹ Phượng, Phường Mi Trưng', N'Con', 15),
('VietCuong@example.com', N'Vũ Việt Cương', '8889990000', N'Nam', '1964-10-03', '064902057675', NULL, N'Ấp Đoàn Thuận, Xã Kim', N'Bản thân', 16),
('ThyVan@example.com', N'Văn Thy Vân', '7776665555', N'Nữ', '1973-08-17', '064902058675', NULL, N'Quận Đan Quân Bình Thuận', N'Cha/Mẹ', 17),
('DucToan@example.com', N'Hoàng Ðức Toản', '3332221111', N'Nam', '1994-04-12', '064902059675', NULL, N'Thành phố Thủ Đức', N'Anh/Chị', 18),
('ThachThao@example.com', N'Nguyễn Thạch Thảo', '5554443333', N'Nữ', '2002-01-28', '064902066675', NULL, N'Biên Hòa, Đồng Nai', N'Vợ/Chồng', 19),
('ChiKien@example.com', 'Tôn Chí Kiên', '1119998888', N'Nam', '2008-07-05', '064902076675', NULL, N'Tp.Hồ Chí Minh', N'Con', 20),
('ThuongHuong@example.com', 'Tôn Thượng Hương', '123123654', N'Nữ', '2003-07-15', '064902086675', NULL, N'Tp.Hồ Chí Minh', N'Bản thân', 1),
('KhongMinh@example.com', 'Gia Cát Lượng', '654545123', N'Nam', '1997-02-25', '064902096675', NULL, N'Tp.Hồ Chí Minh', N'Bản thân', 2),
('NganBinh@example.com', 'Quan Ngân Bình', '987456789', N'Nữ', '1966-12-02', '064902156675', NULL, N'Tp.Hồ Chí Minh', N'Cha/Mẹ', 3),
('TrieuVan@example.com', 'Triệu Tử Long', '213223456', N'Nam', '1975-04-30', '064902256675', NULL, N'Tp.Hồ Chí Minh', N'Cha/Mẹ', 4),
('LinhKhoi@example.com', 'Lữ Linh Khởi', '918273645', N'Nữ', '1962-03-13', '064902356675', NULL, N'Tp.Hồ Chí Minh', N'Cha/Mẹ', 5),
('TaoThao@example.com', 'Tào Mạnh Đức', '192837465', N'Nam', '1977-06-03', '064902456675', NULL, N'Tp.Hồ Chí Minh', N'Anh/Chị', 6),
('ChuDu@example.com', 'Chu Công Cẩn', '467913258', N'Nam', '1980-09-02', '064902556675', NULL, N'Tp.Hồ Chí Minh', N'Anh/Chị', 7),
('NguyenCo@example.com', 'Vương Nguyên Cơ', '9963852741', N'Nữ', '1992-05-02', '064902656675', NULL, N'Tp.Hồ Chí Minh', N'Vợ/Chồng', 8),
('LuuBi@example.com', 'Lưu Huyền Đức', '741852963', N'Nam', '1972-09-02', '064902756675', NULL, N'Tp.Hồ Chí Minh', N'Vợ/Chồng', 9),
('ĐieuThuye@example.com', 'Điêu Thuyền', '1123654789', N'Nữ', '2017-11-11', '064902856675', NULL, N'Tp.Hồ Chí Minh', N'Vợ/Chồng', 10);

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



SET IDENTITY_INSERT [dbo].[registrations] ON 
GO
INSERT [dbo].[registrations] ([registration_id], [registration_Date], [start_Date], [end_Date], [basicInsuranceFee], [discount], [totalSupplementalBenefitFee], [registration_Status], [beneficiary_id], [insurance_id]) VALUES (1, CAST(N'2024-01-19T18:01:37.983' AS DateTime), CAST(N'2024-01-01T00:00:00.000' AS DateTime), CAST(N'2024-01-06T00:00:00.000' AS DateTime), CAST(390000.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(5, 2)), CAST(0.00 AS Decimal(10, 2)), N'Chờ xử lý', 1, 7)
GO
INSERT [dbo].[registrations] ([registration_id], [registration_Date], [start_Date], [end_Date], [basicInsuranceFee], [discount], [totalSupplementalBenefitFee], [registration_Status], [beneficiary_id], [insurance_id]) VALUES (3, CAST(N'2024-01-19T18:16:49.910' AS DateTime), CAST(N'2024-01-01T00:00:00.000' AS DateTime), CAST(N'2024-07-01T00:00:00.000' AS DateTime), CAST(4500000.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(5, 2)), CAST(0.00 AS Decimal(10, 2)), N'Chờ xử lý', 5, 40)
GO
INSERT [dbo].[registrations] ([registration_id], [registration_Date], [start_Date], [end_Date], [basicInsuranceFee], [discount], [totalSupplementalBenefitFee], [registration_Status], [beneficiary_id], [insurance_id]) VALUES (4, CAST(N'2024-01-19T18:16:49.910' AS DateTime), CAST(N'2024-01-01T00:00:00.000' AS DateTime), CAST(N'2024-07-01T00:00:00.000' AS DateTime), CAST(3470000.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(5, 2)), CAST(0.00 AS Decimal(10, 2)), N'Chờ xử lý', 5, 39)
GO
INSERT [dbo].[registrations] ([registration_id], [registration_Date], [start_Date], [end_Date], [basicInsuranceFee], [discount], [totalSupplementalBenefitFee], [registration_Status], [beneficiary_id], [insurance_id]) VALUES (5, CAST(N'2024-01-19T18:16:49.910' AS DateTime), CAST(N'2024-01-01T00:00:00.000' AS DateTime), CAST(N'2024-07-01T00:00:00.000' AS DateTime), CAST(3341250.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(5, 2)), CAST(0.00 AS Decimal(10, 2)), N'Chờ xử lý', 6, 38)
GO
INSERT [dbo].[registrations] ([registration_id], [registration_Date], [start_Date], [end_Date], [basicInsuranceFee], [discount], [totalSupplementalBenefitFee], [registration_Status], [beneficiary_id], [insurance_id]) VALUES (6, CAST(N'2024-01-19T18:16:49.910' AS DateTime), CAST(N'2024-01-01T00:00:00.000' AS DateTime), CAST(N'2024-07-01T00:00:00.000' AS DateTime), CAST(3212500.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(5, 2)), CAST(0.00 AS Decimal(10, 2)), N'Chờ xử lý', 15, 37)
GO
INSERT [dbo].[registrations] ([registration_id], [registration_Date], [start_Date], [end_Date], [basicInsuranceFee], [discount], [totalSupplementalBenefitFee], [registration_Status], [beneficiary_id], [insurance_id]) VALUES (7, CAST(N'2024-01-19T18:16:49.913' AS DateTime), CAST(N'2024-01-01T00:00:00.000' AS DateTime), CAST(N'2024-07-01T00:00:00.000' AS DateTime), CAST(2955000.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(5, 2)), CAST(0.00 AS Decimal(10, 2)), N'Chờ xử lý', 6, 36)
GO
INSERT [dbo].[registrations] ([registration_id], [registration_Date], [start_Date], [end_Date], [basicInsuranceFee], [discount], [totalSupplementalBenefitFee], [registration_Status], [beneficiary_id], [insurance_id]) VALUES (8, CAST(N'2024-01-19T18:16:49.913' AS DateTime), CAST(N'2024-01-01T00:00:00.000' AS DateTime), CAST(N'2024-07-01T00:00:00.000' AS DateTime), CAST(3083750.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(5, 2)), CAST(0.00 AS Decimal(10, 2)), N'Chờ xử lý', 2, 35)
GO
INSERT [dbo].[registrations] ([registration_id], [registration_Date], [start_Date], [end_Date], [basicInsuranceFee], [discount], [totalSupplementalBenefitFee], [registration_Status], [beneficiary_id], [insurance_id]) VALUES (9, CAST(N'2024-01-19T18:16:49.913' AS DateTime), CAST(N'2024-01-01T00:00:00.000' AS DateTime), CAST(N'2024-07-01T00:00:00.000' AS DateTime), CAST(3212500.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(5, 2)), CAST(0.00 AS Decimal(10, 2)), N'Chờ xử lý', 15, 34)
GO
INSERT [dbo].[registrations] ([registration_id], [registration_Date], [start_Date], [end_Date], [basicInsuranceFee], [discount], [totalSupplementalBenefitFee], [registration_Status], [beneficiary_id], [insurance_id]) VALUES (10, CAST(N'2024-01-19T18:16:49.913' AS DateTime), CAST(N'2024-01-01T00:00:00.000' AS DateTime), CAST(N'2024-07-01T00:00:00.000' AS DateTime), CAST(3495750.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(5, 2)), CAST(0.00 AS Decimal(10, 2)), N'Chờ xử lý', 12, 33)
GO
INSERT [dbo].[registrations] ([registration_id], [registration_Date], [start_Date], [end_Date], [basicInsuranceFee], [discount], [totalSupplementalBenefitFee], [registration_Status], [beneficiary_id], [insurance_id]) VALUES (11, CAST(N'2024-01-19T18:16:49.917' AS DateTime), CAST(N'2024-01-01T00:00:00.000' AS DateTime), CAST(N'2024-07-01T00:00:00.000' AS DateTime), CAST(5787500.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(5, 2)), CAST(0.00 AS Decimal(10, 2)), N'Chờ xử lý', 7, 32)
GO
INSERT [dbo].[registrations] ([registration_id], [registration_Date], [start_Date], [end_Date], [basicInsuranceFee], [discount], [totalSupplementalBenefitFee], [registration_Status], [beneficiary_id], [insurance_id]) VALUES (12, CAST(N'2024-01-19T18:16:49.917' AS DateTime), CAST(N'2024-01-01T00:00:00.000' AS DateTime), CAST(N'2024-07-01T00:00:00.000' AS DateTime), CAST(8681250.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(5, 2)), CAST(0.00 AS Decimal(10, 2)), N'Chờ xử lý', 10, 31)
GO
INSERT [dbo].[registrations] ([registration_id], [registration_Date], [start_Date], [end_Date], [basicInsuranceFee], [discount], [totalSupplementalBenefitFee], [registration_Status], [beneficiary_id], [insurance_id]) VALUES (13, CAST(N'2024-01-19T18:16:49.917' AS DateTime), CAST(N'2024-01-01T00:00:00.000' AS DateTime), CAST(N'2024-07-01T00:00:00.000' AS DateTime), CAST(2200000.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(5, 2)), CAST(0.00 AS Decimal(10, 2)), N'Chờ xử lý', 8, 30)
GO
INSERT [dbo].[registrations] ([registration_id], [registration_Date], [start_Date], [end_Date], [basicInsuranceFee], [discount], [totalSupplementalBenefitFee], [registration_Status], [beneficiary_id], [insurance_id]) VALUES (14, CAST(N'2024-01-19T18:16:49.917' AS DateTime), CAST(N'2024-01-01T00:00:00.000' AS DateTime), CAST(N'2024-07-01T00:00:00.000' AS DateTime), CAST(1688000.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(5, 2)), CAST(0.00 AS Decimal(10, 2)), N'Chờ xử lý', 7, 29)
GO
INSERT [dbo].[registrations] ([registration_id], [registration_Date], [start_Date], [end_Date], [basicInsuranceFee], [discount], [totalSupplementalBenefitFee], [registration_Status], [beneficiary_id], [insurance_id]) VALUES (15, CAST(N'2024-01-19T18:16:49.917' AS DateTime), CAST(N'2024-01-01T00:00:00.000' AS DateTime), CAST(N'2024-07-01T00:00:00.000' AS DateTime), CAST(1624000.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(5, 2)), CAST(0.00 AS Decimal(10, 2)), N'Chờ xử lý', 11, 28)
GO
INSERT [dbo].[registrations] ([registration_id], [registration_Date], [start_Date], [end_Date], [basicInsuranceFee], [discount], [totalSupplementalBenefitFee], [registration_Status], [beneficiary_id], [insurance_id]) VALUES (16, CAST(N'2024-01-19T18:16:49.920' AS DateTime), CAST(N'2024-01-01T00:00:00.000' AS DateTime), CAST(N'2024-07-01T00:00:00.000' AS DateTime), CAST(1560000.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(5, 2)), CAST(0.00 AS Decimal(10, 2)), N'Chờ xử lý', 2, 27)
GO
INSERT [dbo].[registrations] ([registration_id], [registration_Date], [start_Date], [end_Date], [basicInsuranceFee], [discount], [totalSupplementalBenefitFee], [registration_Status], [beneficiary_id], [insurance_id]) VALUES (17, CAST(N'2024-01-19T18:16:49.920' AS DateTime), CAST(N'2024-01-01T00:00:00.000' AS DateTime), CAST(N'2024-07-01T00:00:00.000' AS DateTime), CAST(1432000.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(5, 2)), CAST(0.00 AS Decimal(10, 2)), N'Chờ xử lý', 11, 26)
GO
INSERT [dbo].[registrations] ([registration_id], [registration_Date], [start_Date], [end_Date], [basicInsuranceFee], [discount], [totalSupplementalBenefitFee], [registration_Status], [beneficiary_id], [insurance_id]) VALUES (18, CAST(N'2024-01-19T18:16:50.070' AS DateTime), CAST(N'2024-01-01T00:00:00.000' AS DateTime), CAST(N'2024-07-01T00:00:00.000' AS DateTime), CAST(1496000.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(5, 2)), CAST(0.00 AS Decimal(10, 2)), N'Chờ xử lý', 13, 25)
GO
INSERT [dbo].[registrations] ([registration_id], [registration_Date], [start_Date], [end_Date], [basicInsuranceFee], [discount], [totalSupplementalBenefitFee], [registration_Status], [beneficiary_id], [insurance_id]) VALUES (19, CAST(N'2024-01-19T18:16:50.073' AS DateTime), CAST(N'2024-01-01T00:00:00.000' AS DateTime), CAST(N'2024-07-01T00:00:00.000' AS DateTime), CAST(1560000.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(5, 2)), CAST(0.00 AS Decimal(10, 2)), N'Chờ xử lý', 6, 24)
GO
INSERT [dbo].[registrations] ([registration_id], [registration_Date], [start_Date], [end_Date], [basicInsuranceFee], [discount], [totalSupplementalBenefitFee], [registration_Status], [beneficiary_id], [insurance_id]) VALUES (20, CAST(N'2024-01-19T18:16:50.073' AS DateTime), CAST(N'2024-01-01T00:00:00.000' AS DateTime), CAST(N'2024-07-01T00:00:00.000' AS DateTime), CAST(1700800.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(5, 2)), CAST(0.00 AS Decimal(10, 2)), N'Chờ xử lý', 4, 23)
GO
INSERT [dbo].[registrations] ([registration_id], [registration_Date], [start_Date], [end_Date], [basicInsuranceFee], [discount], [totalSupplementalBenefitFee], [registration_Status], [beneficiary_id], [insurance_id]) VALUES (21, CAST(N'2024-01-19T18:16:50.073' AS DateTime), CAST(N'2024-01-01T00:00:00.000' AS DateTime), CAST(N'2024-07-01T00:00:00.000' AS DateTime), CAST(2840000.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(5, 2)), CAST(0.00 AS Decimal(10, 2)), N'Chờ xử lý', 9, 22)
GO
INSERT [dbo].[registrations] ([registration_id], [registration_Date], [start_Date], [end_Date], [basicInsuranceFee], [discount], [totalSupplementalBenefitFee], [registration_Status], [beneficiary_id], [insurance_id]) VALUES (22, CAST(N'2024-01-19T18:16:50.073' AS DateTime), CAST(N'2024-01-01T00:00:00.000' AS DateTime), CAST(N'2024-07-01T00:00:00.000' AS DateTime), CAST(4260000.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(5, 2)), CAST(0.00 AS Decimal(10, 2)), N'Chờ xử lý', 9, 21)
GO
INSERT [dbo].[registrations] ([registration_id], [registration_Date], [start_Date], [end_Date], [basicInsuranceFee], [discount], [totalSupplementalBenefitFee], [registration_Status], [beneficiary_id], [insurance_id]) VALUES (23, CAST(N'2024-01-19T18:22:20.397' AS DateTime), CAST(N'2024-03-01T00:00:00.000' AS DateTime), CAST(N'2024-06-01T00:00:00.000' AS DateTime), CAST(4500000.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(5, 2)), CAST(0.00 AS Decimal(10, 2)), N'Chờ xử lý', 11, 40)
GO
INSERT [dbo].[registrations] ([registration_id], [registration_Date], [start_Date], [end_Date], [basicInsuranceFee], [discount], [totalSupplementalBenefitFee], [registration_Status], [beneficiary_id], [insurance_id]) VALUES (24, CAST(N'2024-01-19T18:22:20.400' AS DateTime), CAST(N'2024-03-01T00:00:00.000' AS DateTime), CAST(N'2024-06-01T00:00:00.000' AS DateTime), CAST(3470000.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(5, 2)), CAST(0.00 AS Decimal(10, 2)), N'Chờ xử lý', 9, 39)
GO
INSERT [dbo].[registrations] ([registration_id], [registration_Date], [start_Date], [end_Date], [basicInsuranceFee], [discount], [totalSupplementalBenefitFee], [registration_Status], [beneficiary_id], [insurance_id]) VALUES (25, CAST(N'2024-01-19T18:22:20.400' AS DateTime), CAST(N'2024-03-01T00:00:00.000' AS DateTime), CAST(N'2024-06-01T00:00:00.000' AS DateTime), CAST(3341250.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(5, 2)), CAST(0.00 AS Decimal(10, 2)), N'Chờ xử lý', 5, 38)
GO
INSERT [dbo].[registrations] ([registration_id], [registration_Date], [start_Date], [end_Date], [basicInsuranceFee], [discount], [totalSupplementalBenefitFee], [registration_Status], [beneficiary_id], [insurance_id]) VALUES (26, CAST(N'2024-01-19T18:22:20.400' AS DateTime), CAST(N'2024-03-01T00:00:00.000' AS DateTime), CAST(N'2024-06-01T00:00:00.000' AS DateTime), CAST(3212500.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(5, 2)), CAST(0.00 AS Decimal(10, 2)), N'Chờ xử lý', 5, 37)
GO
INSERT [dbo].[registrations] ([registration_id], [registration_Date], [start_Date], [end_Date], [basicInsuranceFee], [discount], [totalSupplementalBenefitFee], [registration_Status], [beneficiary_id], [insurance_id]) VALUES (27, CAST(N'2024-01-19T18:22:20.400' AS DateTime), CAST(N'2024-03-01T00:00:00.000' AS DateTime), CAST(N'2024-06-01T00:00:00.000' AS DateTime), CAST(2955000.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(5, 2)), CAST(0.00 AS Decimal(10, 2)), N'Chờ xử lý', 12, 36)
GO
INSERT [dbo].[registrations] ([registration_id], [registration_Date], [start_Date], [end_Date], [basicInsuranceFee], [discount], [totalSupplementalBenefitFee], [registration_Status], [beneficiary_id], [insurance_id]) VALUES (28, CAST(N'2024-01-19T18:22:20.400' AS DateTime), CAST(N'2024-03-01T00:00:00.000' AS DateTime), CAST(N'2024-06-01T00:00:00.000' AS DateTime), CAST(3083750.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(5, 2)), CAST(0.00 AS Decimal(10, 2)), N'Chờ xử lý', 8, 35)
GO
INSERT [dbo].[registrations] ([registration_id], [registration_Date], [start_Date], [end_Date], [basicInsuranceFee], [discount], [totalSupplementalBenefitFee], [registration_Status], [beneficiary_id], [insurance_id]) VALUES (29, CAST(N'2024-01-19T18:22:20.400' AS DateTime), CAST(N'2024-03-01T00:00:00.000' AS DateTime), CAST(N'2024-06-01T00:00:00.000' AS DateTime), CAST(3212500.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(5, 2)), CAST(0.00 AS Decimal(10, 2)), N'Chờ xử lý', 12, 34)
GO
INSERT [dbo].[registrations] ([registration_id], [registration_Date], [start_Date], [end_Date], [basicInsuranceFee], [discount], [totalSupplementalBenefitFee], [registration_Status], [beneficiary_id], [insurance_id]) VALUES (30, CAST(N'2024-01-19T18:22:20.400' AS DateTime), CAST(N'2024-03-01T00:00:00.000' AS DateTime), CAST(N'2024-06-01T00:00:00.000' AS DateTime), CAST(3495750.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(5, 2)), CAST(0.00 AS Decimal(10, 2)), N'Chờ xử lý', 3, 33)
GO
INSERT [dbo].[registrations] ([registration_id], [registration_Date], [start_Date], [end_Date], [basicInsuranceFee], [discount], [totalSupplementalBenefitFee], [registration_Status], [beneficiary_id], [insurance_id]) VALUES (31, CAST(N'2024-01-19T18:22:20.400' AS DateTime), CAST(N'2024-03-01T00:00:00.000' AS DateTime), CAST(N'2024-06-01T00:00:00.000' AS DateTime), CAST(5787500.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(5, 2)), CAST(0.00 AS Decimal(10, 2)), N'Chờ xử lý', 7, 32)
GO
INSERT [dbo].[registrations] ([registration_id], [registration_Date], [start_Date], [end_Date], [basicInsuranceFee], [discount], [totalSupplementalBenefitFee], [registration_Status], [beneficiary_id], [insurance_id]) VALUES (32, CAST(N'2024-01-19T18:22:20.400' AS DateTime), CAST(N'2024-03-01T00:00:00.000' AS DateTime), CAST(N'2024-06-01T00:00:00.000' AS DateTime), CAST(8681250.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(5, 2)), CAST(0.00 AS Decimal(10, 2)), N'Chờ xử lý', 6, 31)
GO
INSERT [dbo].[registrations] ([registration_id], [registration_Date], [start_Date], [end_Date], [basicInsuranceFee], [discount], [totalSupplementalBenefitFee], [registration_Status], [beneficiary_id], [insurance_id]) VALUES (33, CAST(N'2024-01-19T18:22:20.400' AS DateTime), CAST(N'2024-03-01T00:00:00.000' AS DateTime), CAST(N'2024-06-01T00:00:00.000' AS DateTime), CAST(2200000.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(5, 2)), CAST(0.00 AS Decimal(10, 2)), N'Chờ xử lý', 1, 30)
GO
INSERT [dbo].[registrations] ([registration_id], [registration_Date], [start_Date], [end_Date], [basicInsuranceFee], [discount], [totalSupplementalBenefitFee], [registration_Status], [beneficiary_id], [insurance_id]) VALUES (34, CAST(N'2024-01-19T18:22:20.400' AS DateTime), CAST(N'2024-03-01T00:00:00.000' AS DateTime), CAST(N'2024-06-01T00:00:00.000' AS DateTime), CAST(1688000.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(5, 2)), CAST(0.00 AS Decimal(10, 2)), N'Chờ xử lý', 1, 29)
GO
INSERT [dbo].[registrations] ([registration_id], [registration_Date], [start_Date], [end_Date], [basicInsuranceFee], [discount], [totalSupplementalBenefitFee], [registration_Status], [beneficiary_id], [insurance_id]) VALUES (35, CAST(N'2024-01-19T18:22:20.400' AS DateTime), CAST(N'2024-03-01T00:00:00.000' AS DateTime), CAST(N'2024-06-01T00:00:00.000' AS DateTime), CAST(1624000.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(5, 2)), CAST(0.00 AS Decimal(10, 2)), N'Chờ xử lý', 1, 28)
GO
SET IDENTITY_INSERT [dbo].[registrations] OFF
GO

-- table [contracts]
SET IDENTITY_INSERT [dbo].[contracts] ON 
GO
INSERT [dbo].[contracts] ([contract_id], [insurance_code], [signing_Date], [start_Date], [end_Date], [contract_Status], [total_Turn], [bonus_Fee], [initial_Fee], [discount], [total_Fee], [periodic_Fee], [user_id], [beneficiary_id], [registration_id]) VALUES (41, N'202401190041', CAST(N'2024-01-19T20:28:48.913' AS DateTime), CAST(N'2023-08-01T00:00:00.000' AS DateTime), CAST(N'2024-02-01T00:00:00.000' AS DateTime), N'Chưa thanh toán', 6, CAST(0.00 AS Decimal(10, 2)), CAST(2340000.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(10, 2)), CAST(2340000.00 AS Decimal(10, 2)), CAST(390000.00 AS Decimal(10, 2)), 6, 1, 1)
GO
INSERT [dbo].[contracts] ([contract_id], [insurance_code], [signing_Date], [start_Date], [end_Date], [contract_Status], [total_Turn], [bonus_Fee], [initial_Fee], [discount], [total_Fee], [periodic_Fee], [user_id], [beneficiary_id], [registration_id]) VALUES (44, N'202401190044', CAST(N'2024-01-19T20:30:51.797' AS DateTime), CAST(N'2023-06-01T00:00:00.000' AS DateTime), CAST(N'2023-12-01T00:00:00.000' AS DateTime), N'Đã thanh toán', 6, CAST(0.00 AS Decimal(10, 2)), CAST(27000000.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(10, 2)), CAST(27000000.00 AS Decimal(10, 2)), CAST(4500000.00 AS Decimal(10, 2)), 10, 5, 3)
GO
INSERT [dbo].[contracts] ([contract_id], [insurance_code], [signing_Date], [start_Date], [end_Date], [contract_Status], [total_Turn], [bonus_Fee], [initial_Fee], [discount], [total_Fee], [periodic_Fee], [user_id], [beneficiary_id], [registration_id]) VALUES (45, N'202401190045', CAST(N'2024-01-19T20:30:56.063' AS DateTime), CAST(N'2023-03-01T00:00:00.000' AS DateTime), CAST(N'2023-09-01T00:00:00.000' AS DateTime), N'Đã thanh toán', 6, CAST(0.00 AS Decimal(10, 2)), CAST(20820000.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(10, 2)), CAST(20820000.00 AS Decimal(10, 2)), CAST(3470000.00 AS Decimal(10, 2)), 10, 5, 4)
GO
INSERT [dbo].[contracts] ([contract_id], [insurance_code], [signing_Date], [start_Date], [end_Date], [contract_Status], [total_Turn], [bonus_Fee], [initial_Fee], [discount], [total_Fee], [periodic_Fee], [user_id], [beneficiary_id], [registration_id]) VALUES (46, N'202401190046', CAST(N'2024-01-19T20:30:58.913' AS DateTime), CAST(N'2023-01-01T00:00:00.000' AS DateTime), CAST(N'2023-07-01T00:00:00.000' AS DateTime), N'Chưa hoàn thành thanh toán', 6, CAST(0.00 AS Decimal(10, 2)), CAST(20047500.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(10, 2)), CAST(20047500.00 AS Decimal(10, 2)), CAST(3341250.00 AS Decimal(10, 2)), 11, 6, 5)
GO
INSERT [dbo].[contracts] ([contract_id], [insurance_code], [signing_Date], [start_Date], [end_Date], [contract_Status], [total_Turn], [bonus_Fee], [initial_Fee], [discount], [total_Fee], [periodic_Fee], [user_id], [beneficiary_id], [registration_id]) VALUES (47, N'202401190047', CAST(N'2024-01-19T20:31:00.687' AS DateTime), CAST(N'2023-01-01T00:00:00.000' AS DateTime), CAST(N'2023-07-01T00:00:00.000' AS DateTime), N'Chưa hoàn thành thanh toán', 6, CAST(0.00 AS Decimal(10, 2)), CAST(19275000.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(10, 2)), CAST(19275000.00 AS Decimal(10, 2)), CAST(3212500.00 AS Decimal(10, 2)), 20, 15, 6)
GO
INSERT [dbo].[contracts] ([contract_id], [insurance_code], [signing_Date], [start_Date], [end_Date], [contract_Status], [total_Turn], [bonus_Fee], [initial_Fee], [discount], [total_Fee], [periodic_Fee], [user_id], [beneficiary_id], [registration_id]) VALUES (48, N'202401190048', CAST(N'2024-01-19T20:31:06.010' AS DateTime), CAST(N'2023-02-01T00:00:00.000' AS DateTime), CAST(N'2023-08-01T00:00:00.000' AS DateTime), N'Chưa hoàn thành thanh toán', 6, CAST(0.00 AS Decimal(10, 2)), CAST(17730000.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(10, 2)), CAST(17730000.00 AS Decimal(10, 2)), CAST(2955000.00 AS Decimal(10, 2)), 11, 6, 7)
GO
INSERT [dbo].[contracts] ([contract_id], [insurance_code], [signing_Date], [start_Date], [end_Date], [contract_Status], [total_Turn], [bonus_Fee], [initial_Fee], [discount], [total_Fee], [periodic_Fee], [user_id], [beneficiary_id], [registration_id]) VALUES (49, N'202401190049', CAST(N'2024-01-19T20:31:08.007' AS DateTime), CAST(N'2023-04-01T00:00:00.000' AS DateTime), CAST(N'2023-10-01T00:00:00.000' AS DateTime), N'Chưa hoàn thành thanh toán', 6, CAST(0.00 AS Decimal(10, 2)), CAST(18502500.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(10, 2)), CAST(18502500.00 AS Decimal(10, 2)), CAST(3083750.00 AS Decimal(10, 2)), 7, 2, 8)
GO
INSERT [dbo].[contracts] ([contract_id], [insurance_code], [signing_Date], [start_Date], [end_Date], [contract_Status], [total_Turn], [bonus_Fee], [initial_Fee], [discount], [total_Fee], [periodic_Fee], [user_id], [beneficiary_id], [registration_id]) VALUES (50, N'202401190050', CAST(N'2024-01-19T20:31:10.000' AS DateTime), CAST(N'2023-03-01T00:00:00.000' AS DateTime), CAST(N'2023-09-01T00:00:00.000' AS DateTime), N'Chưa hoàn thành thanh toán', 6, CAST(0.00 AS Decimal(10, 2)), CAST(19275000.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(10, 2)), CAST(19275000.00 AS Decimal(10, 2)), CAST(3212500.00 AS Decimal(10, 2)), 20, 15, 9)
GO
INSERT [dbo].[contracts] ([contract_id], [insurance_code], [signing_Date], [start_Date], [end_Date], [contract_Status], [total_Turn], [bonus_Fee], [initial_Fee], [discount], [total_Fee], [periodic_Fee], [user_id], [beneficiary_id], [registration_id]) VALUES (51, N'202401190051', CAST(N'2024-01-19T20:31:12.193' AS DateTime), CAST(N'2023-06-01T00:00:00.000' AS DateTime), CAST(N'2023-12-01T00:00:00.000' AS DateTime), N'Chưa hoàn thành thanh toán', 6, CAST(0.00 AS Decimal(10, 2)), CAST(20974500.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(10, 2)), CAST(20974500.00 AS Decimal(10, 2)), CAST(3495750.00 AS Decimal(10, 2)), 17, 12, 10)
GO
INSERT [dbo].[contracts] ([contract_id], [insurance_code], [signing_Date], [start_Date], [end_Date], [contract_Status], [total_Turn], [bonus_Fee], [initial_Fee], [discount], [total_Fee], [periodic_Fee], [user_id], [beneficiary_id], [registration_id]) VALUES (52, N'202401190052', CAST(N'2024-01-19T20:31:14.213' AS DateTime), CAST(N'2023-11-01T00:00:00.000' AS DateTime), CAST(N'2024-05-01T00:00:00.000' AS DateTime), N'Chưa hoàn thành thanh toán', 6, CAST(0.00 AS Decimal(10, 2)), CAST(34725000.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(10, 2)), CAST(34725000.00 AS Decimal(10, 2)), CAST(5787500.00 AS Decimal(10, 2)), 12, 7, 11)
GO
INSERT [dbo].[contracts] ([contract_id], [insurance_code], [signing_Date], [start_Date], [end_Date], [contract_Status], [total_Turn], [bonus_Fee], [initial_Fee], [discount], [total_Fee], [periodic_Fee], [user_id], [beneficiary_id], [registration_id]) VALUES (53, N'202401190053', CAST(N'2024-01-19T20:31:16.613' AS DateTime), CAST(N'2023-12-01T00:00:00.000' AS DateTime), CAST(N'2024-06-01T00:00:00.000' AS DateTime), N'Chưa hoàn thành thanh toán', 6, CAST(0.00 AS Decimal(10, 2)), CAST(52087500.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(10, 2)), CAST(52087500.00 AS Decimal(10, 2)), CAST(8681250.00 AS Decimal(10, 2)), 15, 10, 12)
GO
INSERT [dbo].[contracts] ([contract_id], [insurance_code], [signing_Date], [start_Date], [end_Date], [contract_Status], [total_Turn], [bonus_Fee], [initial_Fee], [discount], [total_Fee], [periodic_Fee], [user_id], [beneficiary_id], [registration_id]) VALUES (54, N'202401190054', CAST(N'2024-01-19T20:31:19.083' AS DateTime), CAST(N'2023-05-01T00:00:00.000' AS DateTime), CAST(N'2023-11-01T00:00:00.000' AS DateTime), N'Chưa hoàn thành thanh toán', 6, CAST(0.00 AS Decimal(10, 2)), CAST(13200000.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(10, 2)), CAST(13200000.00 AS Decimal(10, 2)), CAST(2200000.00 AS Decimal(10, 2)), 13, 8, 13)
GO
INSERT [dbo].[contracts] ([contract_id], [insurance_code], [signing_Date], [start_Date], [end_Date], [contract_Status], [total_Turn], [bonus_Fee], [initial_Fee], [discount], [total_Fee], [periodic_Fee], [user_id], [beneficiary_id], [registration_id]) VALUES (55, N'202401190055', CAST(N'2024-01-19T20:31:20.987' AS DateTime), CAST(N'2023-06-01T00:00:00.000' AS DateTime), CAST(N'2023-12-01T00:00:00.000' AS DateTime), N'Chưa hoàn thành thanh toán', 6, CAST(0.00 AS Decimal(10, 2)), CAST(10128000.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(10, 2)), CAST(10128000.00 AS Decimal(10, 2)), CAST(1688000.00 AS Decimal(10, 2)), 12, 7, 14)
GO
INSERT [dbo].[contracts] ([contract_id], [insurance_code], [signing_Date], [start_Date], [end_Date], [contract_Status], [total_Turn], [bonus_Fee], [initial_Fee], [discount], [total_Fee], [periodic_Fee], [user_id], [beneficiary_id], [registration_id]) VALUES (56, N'202401190056', CAST(N'2024-01-19T20:31:22.613' AS DateTime), CAST(N'2023-09-01T00:00:00.000' AS DateTime), CAST(N'2024-03-01T00:00:00.000' AS DateTime), N'Chưa hoàn thành thanh toán', 6, CAST(0.00 AS Decimal(10, 2)), CAST(9744000.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(10, 2)), CAST(9744000.00 AS Decimal(10, 2)), CAST(1624000.00 AS Decimal(10, 2)), 16, 11, 15)
GO
INSERT [dbo].[contracts] ([contract_id], [insurance_code], [signing_Date], [start_Date], [end_Date], [contract_Status], [total_Turn], [bonus_Fee], [initial_Fee], [discount], [total_Fee], [periodic_Fee], [user_id], [beneficiary_id], [registration_id]) VALUES (57, N'202401190057', CAST(N'2024-01-19T20:31:24.077' AS DateTime), CAST(N'2023-02-01T00:00:00.000' AS DateTime), CAST(N'2023-08-01T00:00:00.000' AS DateTime), N'Chưa hoàn thành thanh toán', 6, CAST(0.00 AS Decimal(10, 2)), CAST(9360000.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(10, 2)), CAST(9360000.00 AS Decimal(10, 2)), CAST(1560000.00 AS Decimal(10, 2)), 7, 2, 16)
GO
INSERT [dbo].[contracts] ([contract_id], [insurance_code], [signing_Date], [start_Date], [end_Date], [contract_Status], [total_Turn], [bonus_Fee], [initial_Fee], [discount], [total_Fee], [periodic_Fee], [user_id], [beneficiary_id], [registration_id]) VALUES (58, N'202401190058', CAST(N'2024-01-19T20:31:25.567' AS DateTime), CAST(N'2023-02-01T00:00:00.000' AS DateTime), CAST(N'2024-08-01T00:00:00.000' AS DateTime), N'Chưa hoàn thành thanh toán', 6, CAST(0.00 AS Decimal(10, 2)), CAST(8592000.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(10, 2)), CAST(8592000.00 AS Decimal(10, 2)), CAST(1432000.00 AS Decimal(10, 2)), 16, 11, 17)
GO
INSERT [dbo].[contracts] ([contract_id], [insurance_code], [signing_Date], [start_Date], [end_Date], [contract_Status], [total_Turn], [bonus_Fee], [initial_Fee], [discount], [total_Fee], [periodic_Fee], [user_id], [beneficiary_id], [registration_id]) VALUES (59, N'202401190059', CAST(N'2024-01-19T20:31:28.517' AS DateTime), CAST(N'2023-06-01T00:00:00.000' AS DateTime), CAST(N'2024-12-01T00:00:00.000' AS DateTime), N'Chưa hoàn thành thanh toán', 6, CAST(0.00 AS Decimal(10, 2)), CAST(8976000.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(10, 2)), CAST(8976000.00 AS Decimal(10, 2)), CAST(1496000.00 AS Decimal(10, 2)), 18, 13, 18)
GO
INSERT [dbo].[contracts] ([contract_id], [insurance_code], [signing_Date], [start_Date], [end_Date], [contract_Status], [total_Turn], [bonus_Fee], [initial_Fee], [discount], [total_Fee], [periodic_Fee], [user_id], [beneficiary_id], [registration_id]) VALUES (60, N'202401190060', CAST(N'2024-01-19T20:31:30.663' AS DateTime), CAST(N'2023-12-01T00:00:00.000' AS DateTime), CAST(N'2024-03-01T00:00:00.000' AS DateTime), N'Chưa hoàn thành thanh toán', 6, CAST(0.00 AS Decimal(10, 2)), CAST(9360000.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(10, 2)), CAST(9360000.00 AS Decimal(10, 2)), CAST(1560000.00 AS Decimal(10, 2)), 11, 6, 19)
GO
INSERT [dbo].[contracts] ([contract_id], [insurance_code], [signing_Date], [start_Date], [end_Date], [contract_Status], [total_Turn], [bonus_Fee], [initial_Fee], [discount], [total_Fee], [periodic_Fee], [user_id], [beneficiary_id], [registration_id]) VALUES (61, N'202401190061', CAST(N'2024-01-19T20:31:33.733' AS DateTime), CAST(N'2024-01-01T00:00:00.000' AS DateTime), CAST(N'2024-07-01T00:00:00.000' AS DateTime), N'Chưa thanh toán', 6, CAST(0.00 AS Decimal(10, 2)), CAST(10204800.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(10, 2)), CAST(10204800.00 AS Decimal(10, 2)), CAST(1700800.00 AS Decimal(10, 2)), 9, 4, 20)
GO
INSERT [dbo].[contracts] ([contract_id], [insurance_code], [signing_Date], [start_Date], [end_Date], [contract_Status], [total_Turn], [bonus_Fee], [initial_Fee], [discount], [total_Fee], [periodic_Fee], [user_id], [beneficiary_id], [registration_id]) VALUES (62, N'202401190062', CAST(N'2024-01-19T20:31:35.477' AS DateTime), CAST(N'2024-01-01T00:00:00.000' AS DateTime), CAST(N'2024-07-01T00:00:00.000' AS DateTime), N'Chưa thanh toán', 6, CAST(0.00 AS Decimal(10, 2)), CAST(17040000.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(10, 2)), CAST(17040000.00 AS Decimal(10, 2)), CAST(2840000.00 AS Decimal(10, 2)), 14, 9, 21)
GO
INSERT [dbo].[contracts] ([contract_id], [insurance_code], [signing_Date], [start_Date], [end_Date], [contract_Status], [total_Turn], [bonus_Fee], [initial_Fee], [discount], [total_Fee], [periodic_Fee], [user_id], [beneficiary_id], [registration_id]) VALUES (63, N'202401190063', CAST(N'2024-01-19T20:31:37.470' AS DateTime), CAST(N'2024-01-01T00:00:00.000' AS DateTime), CAST(N'2024-07-01T00:00:00.000' AS DateTime), N'Chưa thanh toán', 6, CAST(0.00 AS Decimal(10, 2)), CAST(25560000.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(10, 2)), CAST(25560000.00 AS Decimal(10, 2)), CAST(4260000.00 AS Decimal(10, 2)), 14, 9, 22)
GO
INSERT [dbo].[contracts] ([contract_id], [insurance_code], [signing_Date], [start_Date], [end_Date], [contract_Status], [total_Turn], [bonus_Fee], [initial_Fee], [discount], [total_Fee], [periodic_Fee], [user_id], [beneficiary_id], [registration_id]) VALUES (64, N'202401190064', CAST(N'2024-01-19T20:31:39.070' AS DateTime), CAST(N'2023-01-01T00:00:00.000' AS DateTime), CAST(N'2023-04-01T00:00:00.000' AS DateTime), N'Đã thanh toán', 3, CAST(0.00 AS Decimal(10, 2)), CAST(13500000.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(10, 2)), CAST(13500000.00 AS Decimal(10, 2)), CAST(4500000.00 AS Decimal(10, 2)), 16, 11, 23)
GO
INSERT [dbo].[contracts] ([contract_id], [insurance_code], [signing_Date], [start_Date], [end_Date], [contract_Status], [total_Turn], [bonus_Fee], [initial_Fee], [discount], [total_Fee], [periodic_Fee], [user_id], [beneficiary_id], [registration_id]) VALUES (65, N'202401190065', CAST(N'2024-01-19T20:31:41.127' AS DateTime), CAST(N'2023-09-01T00:00:00.000' AS DateTime), CAST(N'2023-12-01T00:00:00.000' AS DateTime), N'Chưa hoàn thành thanh toán', 3, CAST(0.00 AS Decimal(10, 2)), CAST(10410000.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(10, 2)), CAST(10410000.00 AS Decimal(10, 2)), CAST(3470000.00 AS Decimal(10, 2)), 14, 9, 24)
GO
INSERT [dbo].[contracts] ([contract_id], [insurance_code], [signing_Date], [start_Date], [end_Date], [contract_Status], [total_Turn], [bonus_Fee], [initial_Fee], [discount], [total_Fee], [periodic_Fee], [user_id], [beneficiary_id], [registration_id]) VALUES (66, N'202401190066', CAST(N'2024-01-19T20:31:42.680' AS DateTime), CAST(N'2023-10-01T00:00:00.000' AS DateTime), CAST(N'2024-01-01T00:00:00.000' AS DateTime), N'Đã thanh toán', 3, CAST(0.00 AS Decimal(10, 2)), CAST(10023750.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(10, 2)), CAST(10023750.00 AS Decimal(10, 2)), CAST(3341250.00 AS Decimal(10, 2)), 10, 5, 25)
GO
INSERT [dbo].[contracts] ([contract_id], [insurance_code], [signing_Date], [start_Date], [end_Date], [contract_Status], [total_Turn], [bonus_Fee], [initial_Fee], [discount], [total_Fee], [periodic_Fee], [user_id], [beneficiary_id], [registration_id]) VALUES (67, N'202401190067', CAST(N'2024-01-19T20:31:44.390' AS DateTime), CAST(N'2023-12-01T00:00:00.000' AS DateTime), CAST(N'2024-03-01T00:00:00.000' AS DateTime), N'Chưa hoàn thành thanh toán', 3, CAST(0.00 AS Decimal(10, 2)), CAST(9637500.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(10, 2)), CAST(9637500.00 AS Decimal(10, 2)), CAST(3212500.00 AS Decimal(10, 2)), 10, 5, 26)
GO
INSERT [dbo].[contracts] ([contract_id], [insurance_code], [signing_Date], [start_Date], [end_Date], [contract_Status], [total_Turn], [bonus_Fee], [initial_Fee], [discount], [total_Fee], [periodic_Fee], [user_id], [beneficiary_id], [registration_id]) VALUES (68, N'202401190068', CAST(N'2024-01-19T20:31:46.410' AS DateTime), CAST(N'2023-11-01T00:00:00.000' AS DateTime), CAST(N'2024-02-01T00:00:00.000' AS DateTime), N'Chưa hoàn thành thanh toán', 3, CAST(0.00 AS Decimal(10, 2)), CAST(8865000.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(10, 2)), CAST(8865000.00 AS Decimal(10, 2)), CAST(2955000.00 AS Decimal(10, 2)), 17, 12, 27)
GO
INSERT [dbo].[contracts] ([contract_id], [insurance_code], [signing_Date], [start_Date], [end_Date], [contract_Status], [total_Turn], [bonus_Fee], [initial_Fee], [discount], [total_Fee], [periodic_Fee], [user_id], [beneficiary_id], [registration_id]) VALUES (69, N'202401190069', CAST(N'2024-01-19T20:31:47.950' AS DateTime), CAST(N'2023-10-01T00:00:00.000' AS DateTime), CAST(N'2024-01-01T00:00:00.000' AS DateTime), N'Chưa hoàn thành thanh toán', 3, CAST(0.00 AS Decimal(10, 2)), CAST(9251250.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(10, 2)), CAST(9251250.00 AS Decimal(10, 2)), CAST(3083750.00 AS Decimal(10, 2)), 13, 8, 28)
GO
INSERT [dbo].[contracts] ([contract_id], [insurance_code], [signing_Date], [start_Date], [end_Date], [contract_Status], [total_Turn], [bonus_Fee], [initial_Fee], [discount], [total_Fee], [periodic_Fee], [user_id], [beneficiary_id], [registration_id]) VALUES (70, N'202401190070', CAST(N'2024-01-19T20:31:49.783' AS DateTime), CAST(N'2023-12-01T00:00:00.000' AS DateTime), CAST(N'2024-03-01T00:00:00.000' AS DateTime), N'Đã thanh toán', 3, CAST(0.00 AS Decimal(10, 2)), CAST(9637500.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(10, 2)), CAST(9637500.00 AS Decimal(10, 2)), CAST(3212500.00 AS Decimal(10, 2)), 17, 12, 29)
GO
INSERT [dbo].[contracts] ([contract_id], [insurance_code], [signing_Date], [start_Date], [end_Date], [contract_Status], [total_Turn], [bonus_Fee], [initial_Fee], [discount], [total_Fee], [periodic_Fee], [user_id], [beneficiary_id], [registration_id]) VALUES (71, N'202401190071', CAST(N'2024-01-19T20:31:52.687' AS DateTime), CAST(N'2024-01-01T00:00:00.000' AS DateTime), CAST(N'2024-04-01T00:00:00.000' AS DateTime), N'Chưa hoàn thành thanh toán', 3, CAST(0.00 AS Decimal(10, 2)), CAST(10487250.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(10, 2)), CAST(10487250.00 AS Decimal(10, 2)), CAST(3495750.00 AS Decimal(10, 2)), 8, 3, 30)
GO
INSERT [dbo].[contracts] ([contract_id], [insurance_code], [signing_Date], [start_Date], [end_Date], [contract_Status], [total_Turn], [bonus_Fee], [initial_Fee], [discount], [total_Fee], [periodic_Fee], [user_id], [beneficiary_id], [registration_id]) VALUES (72, N'202401190072', CAST(N'2024-01-19T20:31:54.240' AS DateTime), CAST(N'2023-11-01T00:00:00.000' AS DateTime), CAST(N'2024-02-01T00:00:00.000' AS DateTime), N'Chưa hoàn thành thanh toán', 3, CAST(0.00 AS Decimal(10, 2)), CAST(17362500.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(10, 2)), CAST(17362500.00 AS Decimal(10, 2)), CAST(5787500.00 AS Decimal(10, 2)), 12, 7, 31)
GO
INSERT [dbo].[contracts] ([contract_id], [insurance_code], [signing_Date], [start_Date], [end_Date], [contract_Status], [total_Turn], [bonus_Fee], [initial_Fee], [discount], [total_Fee], [periodic_Fee], [user_id], [beneficiary_id], [registration_id]) VALUES (73, N'202401190073', CAST(N'2024-01-19T20:31:55.680' AS DateTime), CAST(N'2024-01-01T00:00:00.000' AS DateTime), CAST(N'2024-04-01T00:00:00.000' AS DateTime), N'Chưa hoàn thành thanh toán', 3, CAST(0.00 AS Decimal(10, 2)), CAST(26043750.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(10, 2)), CAST(26043750.00 AS Decimal(10, 2)), CAST(8681250.00 AS Decimal(10, 2)), 11, 6, 32)
GO
INSERT [dbo].[contracts] ([contract_id], [insurance_code], [signing_Date], [start_Date], [end_Date], [contract_Status], [total_Turn], [bonus_Fee], [initial_Fee], [discount], [total_Fee], [periodic_Fee], [user_id], [beneficiary_id], [registration_id]) VALUES (74, N'202401190074', CAST(N'2024-01-19T20:31:57.500' AS DateTime), CAST(N'2023-12-01T00:00:00.000' AS DateTime), CAST(N'2024-03-01T00:00:00.000' AS DateTime), N'Chưa hoàn thành thanh toán', 3, CAST(0.00 AS Decimal(10, 2)), CAST(6600000.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(10, 2)), CAST(6600000.00 AS Decimal(10, 2)), CAST(2200000.00 AS Decimal(10, 2)), 6, 1, 33)
GO
INSERT [dbo].[contracts] ([contract_id], [insurance_code], [signing_Date], [start_Date], [end_Date], [contract_Status], [total_Turn], [bonus_Fee], [initial_Fee], [discount], [total_Fee], [periodic_Fee], [user_id], [beneficiary_id], [registration_id]) VALUES (75, N'202401190075', CAST(N'2024-01-19T20:31:59.133' AS DateTime), CAST(N'2023-12-01T00:00:00.000' AS DateTime), CAST(N'2024-03-01T00:00:00.000' AS DateTime), N'Chưa hoàn thành thanh toán', 3, CAST(0.00 AS Decimal(10, 2)), CAST(5064000.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(10, 2)), CAST(5064000.00 AS Decimal(10, 2)), CAST(1688000.00 AS Decimal(10, 2)), 6, 1, 34)
GO
INSERT [dbo].[contracts] ([contract_id], [insurance_code], [signing_Date], [start_Date], [end_Date], [contract_Status], [total_Turn], [bonus_Fee], [initial_Fee], [discount], [total_Fee], [periodic_Fee], [user_id], [beneficiary_id], [registration_id]) VALUES (76, N'202401190076', CAST(N'2024-01-19T20:32:00.433' AS DateTime), CAST(N'2023-10-01T00:00:00.000' AS DateTime), CAST(N'2024-01-01T00:00:00.000' AS DateTime), N'Chưa hoàn thành thanh toán', 3, CAST(0.00 AS Decimal(10, 2)), CAST(4872000.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(10, 2)), CAST(4872000.00 AS Decimal(10, 2)), CAST(1624000.00 AS Decimal(10, 2)), 6, 1, 35)
GO
SET IDENTITY_INSERT [dbo].[contracts] OFF
GO


-- table [contract_payment_histories]
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-01-08 02:54:01', 2047, 5787500, 'VNPAY', 'VIB', 52);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-01-11 06:19:02', 2049, 2955000, 'VNPAY', 'VietinBank', 48);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-01-11 14:07:46', 2119, 3470000, 'VNPAY', 'TPBank', 45);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-01-12 23:39:35', 2083, 4500000, 'VNPAY', 'VPBank', 64);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-01-15 14:03:17', 2057, 3212500, 'VNPAY', 'ACB', 47);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-01-16 11:50:34', 2043, 3212500, 'VNPAY', 'Techcombank', 47);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-01-23 14:44:10', 2138, 3341250, 'VNPAY', 'VietinBank', 46);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-01-28 21:29:54', 2111, 3083750, 'VNPAY', 'Vietcombank', 69);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-02-03 08:18:22', 2058, 1560000, 'VNPAY', 'Vietcombank', 57);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-03-04 00:00:21', 2065, 3083750, 'VNPAY', 'Techcombank', 49);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-03-06 17:27:30', 2107, 3341250, 'VNPAY', 'Techcombank', 46);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-03-10 04:51:03', 2092, 1432000, 'VNPAY', 'ACB', 58);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-03-13 02:24:46', 2055, 2955000, 'VNPAY', 'MB', 68);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-03-15 14:19:10', 2075, 3212500, 'VNPAY', 'Agribank', 50);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-03-16 12:33:52', 2051, 3470000, 'VNPAY', 'TPBank', 45);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-03-18 14:26:59', 2060, 3212500, 'VNPAY', 'TPBank', 70);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-03-23 02:32:29', 2104, 3212500, 'VNPAY', 'ACB', 50);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-03-31 00:44:41', 2099, 2955000, 'VNPAY', 'VPBank', 68);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-04-06 10:09:34', 2122, 5787500, 'VNPAY', 'Techcombank', 52);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-04-13 08:22:57', 2058, 2955000, 'VNPAY', 'VIB', 48);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-04-15 11:37:25', 2048, 1432000, 'VNPAY', 'Vietcombank', 58);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-04-20 19:33:44', 2105, 3341250, 'VNPAY', 'Techcombank', 66);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-04-30 03:05:38', 2099, 2200000, 'VNPAY', 'VPBank', 54);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-05-02 00:38:08', 2118, 1496000, 'VNPAY', 'VietinBank', 59);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-05-08 18:40:54', 2106, 1496000, 'VNPAY', 'VietinBank', 59);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-05-09 18:18:47', 2089, 3495750, 'VNPAY', 'Agribank', 71);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-05-12 11:20:54', 2075, 2200000, 'VNPAY', 'Techcombank', 54);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-05-19 14:42:51', 2088, 3083750, 'VNPAY', 'MB', 69);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-05-21 21:05:15', 2096, 4500000, 'VNPAY', 'Agribank', 44);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-05-23 03:22:03', 2093, 3212500, 'VNPAY', 'BIDV', 47);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-05-24 10:19:00', 2073, 1688000, 'VNPAY', 'Techcombank', 55);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-05-26 02:29:16', 2070, 4500000, 'VNPAY', 'MB', 64);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-05-30 16:17:49', 2069, 3495750, 'VNPAY', 'VIB', 51);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-06-01 02:01:07', 2103, 3470000, 'VNPAY', 'Agribank', 45);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-06-12 14:45:01', 2132, 3470000, 'VNPAY', 'BIDV', 45);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-06-12 15:03:20', 2118, 1560000, 'VNPAY', 'BIDV', 60);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-06-14 22:31:22', 2105, 3495750, 'VNPAY', 'Agribank', 51);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-06-18 00:28:11', 2124, 3212500, 'VNPAY', 'ACB', 67);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-06-20 02:58:40', 2121, 3212500, 'VNPAY', 'Agribank', 50);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-06-23 16:27:16', 2148, 1496000, 'VNPAY', 'VPBank', 59);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-06-26 17:37:56', 2067, 2955000, 'VNPAY', 'Agribank', 48);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-06-28 22:07:08', 2123, 4500000, 'VNPAY', 'Agribank', 44);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-07-01 15:47:38', 2093, 5787500, 'VNPAY', 'TPBank', 52);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-07-03 15:24:30', 2074, 4500000, 'VNPAY', 'VPBank', 64);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-07-12 08:01:22', 2045, 4500000, 'VNPAY', 'ACB', 44);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-07-16 09:56:35', 2061, 1560000, 'VNPAY', 'MB', 57);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-07-23 01:33:35', 2148, 3083750, 'VNPAY', 'BIDV', 49);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-07-25 23:55:51', 2134, 3341250, 'VNPAY', 'Vietcombank', 46);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-07-27 09:40:21', 2111, 5787500, 'VNPAY', 'ACB', 52);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-08-01 14:20:14', 2081, 8681250, 'VNPAY', 'Agribank', 53);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-08-05 19:18:00', 2065, 3470000, 'VNPAY', 'VIB', 65);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-08-20 20:48:54', 2125, 1624000, 'VNPAY', 'Vietcombank', 56);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-09-04 07:38:22', 2057, 3495750, 'VNPAY', 'ACB', 51);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-09-05 02:41:59', 2071, 2955000, 'VNPAY', 'ACB', 48);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-09-08 14:05:13', 2047, 3341250, 'VNPAY', 'VPBank', 46);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-09-19 04:22:04', 2069, 3495750, 'VNPAY', 'Agribank', 51);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-09-28 08:32:42', 2150, 3495750, 'VNPAY', 'BIDV', 71);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-10-02 06:48:41', 2097, 1688000, 'VNPAY', 'Vietcombank', 55);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-10-03 08:28:37', 2107, 3341250, 'VNPAY', 'TPBank', 66);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-10-08 11:30:45', 2105, 3212500, 'VNPAY', 'BIDV', 47);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-10-18 06:27:54', 2091, 3212500, 'VNPAY', 'VPBank', 67);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-10-23 13:39:17', 2131, 3212500, 'VNPAY', 'Techcombank', 70);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-10-27 09:15:46', 2119, 3470000, 'VNPAY', 'BIDV', 45);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-10-29 00:28:00', 2091, 3212500, 'VNPAY', 'VIB', 50);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-10-30 01:09:56', 2068, 1432000, 'VNPAY', 'BIDV', 58);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-11-02 12:47:48', 2063, 1560000, 'VNPAY', 'VIB', 60);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-11-09 06:57:06', 2064, 3495750, 'VNPAY', 'Techcombank', 51);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-11-09 23:30:48', 2102, 3341250, 'VNPAY', 'VietinBank', 46);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-11-12 03:53:49', 2070, 2200000, 'VNPAY', 'Agribank', 54);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-11-14 03:28:40', 2074, 3470000, 'VNPAY', 'TPBank', 45);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-11-16 22:49:10', 2139, 1496000, 'VNPAY', 'TPBank', 59);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-11-21 07:09:16', 2108, 1688000, 'VNPAY', 'Agribank', 55);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-11-22 00:50:18', 2101, 4500000, 'VNPAY', 'Techcombank', 44);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-11-29 08:04:30', 2068, 8681250, 'VNPAY', 'VIB', 53);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-12-04 23:08:40', 2089, 3212500, 'VNPAY', 'TPBank', 70);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-12-08 13:32:36', 2113, 4500000, 'VNPAY', 'VietinBank', 44);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-12-09 08:57:28', 2117, 1624000, 'VNPAY', 'ACB', 56);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-12-12 14:56:36', 2144, 3083750, 'VNPAY', 'ACB', 49);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-12-18 12:55:38', 2109, 3470000, 'VNPAY', 'Vietcombank', 65);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-12-19 04:09:34', 2080, 1624000, 'VNPAY', 'Vietcombank', 56);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-12-22 03:52:22', 2111, 3083750, 'VNPAY', 'Techcombank', 49);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2023-12-25 23:20:50', 2077, 1560000, 'VNPAY', 'TPBank', 60);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2024-01-02 18:12:03', 2064, 3212500, 'VNPAY', 'Vietcombank', 47);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2024-01-04 14:41:46', 2040, 8681250, 'VNPAY', 'Agribank', 53);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2024-01-05 22:10:39', 2049, 4500000, 'VNPAY', 'ACB', 44);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2024-01-08 02:19:52', 2094, 1560000, 'VNPAY', 'BIDV', 57);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2024-01-15 06:41:20', 2065, 3341250, 'VNPAY', 'Techcombank', 66);
insert into [contract_payment_histories] (payment_Date, [transaction_Code], [payment_Amount], [service_Payment], [bank_Name], [contract_Id]) values ('2024-01-19 02:40:27', 2077, 5787500, 'VNPAY', 'VPBank', 52);

update [contract_payment_histories]
set [status] = N'Đã thanh toán'

-- INSERT PAYMENT REQUEST
exec AddPaymentRequest 41, 2000000, 'Gãy chân', null;
exec AddPaymentRequest 44, 6000000, 'Gãy tay', null;
exec AddPaymentRequest 45, 45000000, 'Ung thư', null;
exec AddPaymentRequest 46, 25000000, 'Đau dạ dày', null;
exec AddPaymentRequest 47, 450000, 'Viêm họng', null;
exec AddPaymentRequest 48, 27000000, 'HIV/AIDS', null;
exec AddPaymentRequest 49, 34000000, 'Đứt dây chằng ở chân', null;
exec AddPaymentRequest 50, 28000000, 'Chấn thương cột sống', null;
exec AddPaymentRequest 51, 4000000, 'Thoát vị đĩa đệm', null;
exec AddPaymentRequest 52, 2000000, 'Chấn thương tâm lý', null;
exec AddPaymentRequest 52, 13000000, 'Sỏ thận', null;