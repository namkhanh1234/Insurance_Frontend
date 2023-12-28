USE master;
--
IF EXISTS(SELECT * FROM sys.databases WHERE name = 'DB_Insurance')
BEGIN
  DROP DATABASE DB_Insurance;  
END
CREATE DATABASE DB_Insurance;

GO
USE DB_Insurance;
GO

-- Người đăng ký - Người mua bảo hiểm
CREATE TABLE users (
    user_id INT PRIMARY KEY IDENTITY(1,1), -- ID người dùng
    email NVARCHAR(255) UNIQUE NOT NULL, -- Email
    hashed_password NVARCHAR(200) NOT NULL,	--mật khẩu được mã hóa
    full_name NVARCHAR(255), -- Họ và tên
    phone NVARCHAR(20) NOT NULL, -- Số điện thoại
    sex NVARCHAR(5), -- Giới tính
	date_of_birth DATE, -- Ngày sinh
    card_identification NVARCHAR(20) NOT NULL -- Căn cước công dân/ chứng minh nhân dân
);
GO

-- SELECT * FROM users;
-- Thiếu created, status

-- Người thụ hưởng || Người được mua bảo hiểm
CREATE TABLE beneficiaries (
    beneficiary_id INT PRIMARY KEY IDENTITY(1,1), -- ID người dùng
    email NVARCHAR(255) UNIQUE NOT NULL, -- Email
    full_name NVARCHAR(255), -- Họ và tên
    phone NVARCHAR(20) NOT NULL, -- Số điện thoại
    sex NVARCHAR(5), -- Giới tính
	date_of_birth DATE, -- Ngày sinh
    card_identification NVARCHAR(20) NOT NULL, -- Căn cước công dân/ chứng minh nhân dân
	image_identification_url VARCHAR(255),
	address NVARCHAR(255),
	relationship_policyholder NVARCHAR(100), -- Bản thân, Cha/mẹ, Vợ/chồng, Con/cáij
	user_id INT,
	FOREIGN KEY (user_id) REFERENCES  users(user_id)
);
GO

select * from users;
select * from beneficiaries

INSERT INTO beneficiaries (email, full_name, phone, sex, date_of_birth, card_identification, image_identification_url, address, relationship_policyholder, user_id)
VALUES 
		('lethuy@gmail.com', N'Nguyễn Lệ Thủy', '0987654123', N'Nữ', '1990-02-15', '3526022553', null, N'Linh Trung, Thủ Đức', N'Anh/chị', 4),
		('leminh@example.com', N'Lê Văn Minh', '0123412345', N'Nam', '1985-05-30', '3526022356', null, N'Linh Xuân, Thủ Đức', N'Bản thân', 5);

--
CREATE TABLE tokens
(
    token_id INT PRIMARY KEY IDENTITY(1,1),
    token VARCHAR(255) NOT NULL,
    created DATETIME,
    expired DATETIME,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES  users(user_id)
);
GO
-- SELECT * FROM tokens;

CREATE TABLE insurance_types
(
    InsuranceType_ID INT PRIMARY KEY IDENTITY(1,1),
    NameInsuranceType NVARCHAR(255) NOT NULL
);
GO

CREATE TABLE insurances
(
    Insurance_ID INT PRIMARY KEY IDENTITY(1,1),
    NameInsurance NVARCHAR(255) NOT NULL,
	FromAge INT NOT NULL,
	ToAge INT NOT NULL,
	Price FLOAT NOT NULL CHECK (price > 0), -- TotalInsuranceFee: Tổng phí cơ bản của gói bảo hiểm trước khi giảm giá
	Discount FLOAT CHECK (discount >= 0) DEFAULT 0, -- DiscountRate: Tỷ lệ giảm giá áp dụng cho gói bảo hiểm.
	Status NVARCHAR(40) DEFAULT 'Active',
	InsuranceType_ID INT,
	FOREIGN KEY (InsuranceType_ID) REFERENCES  insurance_types(InsuranceType_ID)
);
GO

INSERT INTO insurance_types (NameInsuranceType) VALUES 
    (N'Đồng'),
    (N'Bạc'),
    (N'Titan'),
	(N'Vàng');
	--(N'Bạch Kim'),
	--(N'Kim Cương');

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


CREATE TABLE benefit_types
(
    BenefitType_ID INT PRIMARY KEY IDENTITY(1,1),
    NameBenefitType NVARCHAR(255) NOT NULL
);
GO

CREATE TABLE benefits
(
    Benefit_ID INT PRIMARY KEY IDENTITY(1,1),
    NameBenefit NVARCHAR(255) NOT NULL,
	Period NVARCHAR(50),
	BenefitType_ID INT,
	FOREIGN KEY (BenefitType_ID) REFERENCES  benefit_types(BenefitType_ID)
);
GO

INSERT INTO benefit_types (NameBenefitType) VALUES 
    (N'Chăm sóc sức khỏe'),
    (N'Sinh mạng cá nhân'),
    (N'Tai nạn cá nhân');

INSERT INTO benefits (NameBenefit, Period, BenefitType_ID)
VALUES
	(N'Điều trị nội trú', 'Năm', 1),
	(N'Điều trị nội trú do bệnh', 'Năm', 1),
	(N'Chi phí nằm viện (bao gồm cả điều trị trong ngày và điều trị cấp cứu có phát sinh chi phí giường)', 'Năm', 1),
	(N'Chi phí phẫu thuật', 'Năm', 1),
	(N'Phẫu thuật nội trú', 'Năm', 1),
	(N'Phẫu thuật ngoại trú', 'Năm', 1),
	(N'Phẫu thuật trong ngày', 'Năm', 1),
	(N'Phẫu thuật liên quan đến cấy ghép nội tạng (không bảo hiểm chi phí mua bộ phận và chi phí hiến)', 'Năm', 1),
	(N'Chi phí điều trị trước khi nhập viện/năm (tối đa 30 ngày trước khi nhập viện)', 'Năm', 1),
	(N'Chi phí điều trị ngay sau khi xuất viện trong vòng 30 ngày sau khi xuất viện/năm(tối đa 30 ngày kể từ ngày xuất viện)', 'Năm', 1),
	(N'Chi phí y tá chăm sóc tại nhà ngay sau khi xuất viện/năm (tối đa 15 ngày kể từ ngày xuất viện)', 'Năm', 1),
	(N'Dịch vụ xe cứu thương trong lãnh thổ Việt Nam (loại trừ bằng đường hàng không)', 'Năm', 1),
	(N'Trợ cấp nằm viện nội trú', 'Năm', 1),
	(N'Trợ cấp mai táng phí trong trường hợp tử vong tại bệnh viện', 'Năm', 1);


INSERT INTO benefits (NameBenefit, Period, BenefitType_ID)
VALUES
	(N'Tử vong, tàn tật toàn bộ vĩnh viễn do các bệnh lý/tình trạng theo danh sách tại Mục (*) Điều khoản bổ sung', 'Năm', 3),
	(N'Tử vong, tàn tật toàn bộ vĩnh viễn do bệnh khác', 'Năm', 3),
	(N'Chi phí y tế điều trị tai nạn', 'Năm', 3);

INSERT INTO benefits (NameBenefit, Period, BenefitType_ID)
VALUES
	(N'Tử vong, tàn tật toàn bộ vĩnh viễn do các bệnh lý/tình trạng theo danh sách tại Mục (*) Điều khoản bổ sung', 'Năm', 2),
	(N'Tử vong, tàn tật toàn bộ vĩnh viễn do bệnh khác', 'Năm', 2);

--select * from benefit_types;
--select * from benefits;


CREATE TABLE benefit_details
(
	Insurance_ID INT,
    Benefit_ID INT,
	ClaimSettlementFee INT,
	CONSTRAINT PK_BENEFIT_DETAILS PRIMARY KEY(Benefit_ID, Insurance_ID),
	FOREIGN KEY (Benefit_ID) REFERENCES  benefits(Benefit_ID),
	FOREIGN KEY (Insurance_ID) REFERENCES  insurances(Insurance_ID)
);
GO

INSERT INTO benefit_details (Benefit_ID, Insurance_ID, ClaimSettlementFee)
VALUES
	(16, 1, 12500000),
	(17, 1, 12500000),
	(18, 1, 12500000),
	(19, 1, 12500000),
	(20, 1, 12500000),
	(21, 1, 12500000),
	(22, 1, 12500000),
	(23, 1, 12500000),
	(24, 1, 625000),
	(25, 1, 625000),
	(26, 1, 625000),
	(27, 1, 12500000),
	(28, 1, 750000),
	(29, 1, 625000),

	(33, 1, 50000000),
	(34, 1, 50000000),
	(35, 1, 5000000),


	(36, 1, 12500000),
	(37, 1, 25000000);


INSERT INTO benefit_details (Benefit_ID, Insurance_ID, ClaimSettlementFee)
VALUES
	(16, 11, 25000000),
	(17, 11, 25000000),
	(18, 11, 25000000),
	(19, 11, 25000000),
	(20, 11, 25000000),
	(21, 11, 25000000),
	(22, 11, 25000000),
	(23, 11, 25000000),
	(24, 11, 1250000),
	(25, 11, 1250000),
	(26, 11, 1250000),
	(27, 11, 25000000),
	(28, 11, 1500000),
	(29, 11, 1250000),

	(33, 11, 100000000),
	(34, 11, 100000000),
	(35, 11, 10000000),

	(36, 11, 25000000),
	(37, 11, 50000000);


INSERT INTO benefit_details (Benefit_ID, Insurance_ID, ClaimSettlementFee)
VALUES
	(16, 21, 50000000),
	(17, 21, 50000000),
	(18, 21, 50000000),
	(19, 21, 50000000),
	(20, 21, 50000000),
	(21, 21, 50000000),
	(22, 21, 50000000),
	(23, 21, 50000000),
	(24, 21, 2500000),
	(25, 21, 2500000),
	(26, 21, 2500000),
	(27, 21, 3000000),
	(28, 21, 2000000),
	(29, 21, 1250000),

	(33, 21, 200000000),
	(34, 21, 200000000),
	(35, 21, 20000000),

	(36, 21, 50000000),
	(37, 21, 100000000);

INSERT INTO benefit_details (Benefit_ID, Insurance_ID, ClaimSettlementFee)
VALUES
	(16, 31, 125000000),
	(17, 31, 125000000),
	(18, 31, 125000000),
	(19, 31, 125000000),
	(20, 31, 125000000),
	(21, 31, 125000000),
	(22, 31, 125000000),
	(23, 31, 125000000),
	(24, 31, 6250000),
	(25, 31, 6250000),
	(26, 31, 6250000),
	(27, 31, 125000000),
	(28, 31, 7500000),
	(29, 31, 2000000),

	(33, 31, 500000000),
	(34, 31, 500000000),
	(35, 31, 50000000),

	(36, 31, 125000000),
	(37, 31, 250000000);


-- Table Registration Insurance
-- Lưu ý: basicInsuranceFee, discount: lưu vậy xử lý nhanh. Nhưng phải đảm bảo ràng buộc với bên gói bảo hiểm
CREATE TABLE registrations (
    registration_id INT PRIMARY KEY IDENTITY(1,1), -- ID đơn đăng ký
    registration_Date DATETIME DEFAULT GETDATE(), -- Ngày tạo đơn đăng ký bảo hiểm
    start_Date DATETIME NOT NULL, -- Thời gian bảo hiểm bắt đầu hiệu lực
    end_Date DATETIME NOT NULL, -- Thời gian bảo hiểm hết hiệu lực
    basicInsuranceFee DECIMAL(10,2), -- Phí gói bảo hiểm - Không có giảm giá - Giá nguyên thủy
	discount DECIMAL(5,2) DEFAULT 0,	-- Phần trăm giảm giá
	totalSupplementalBenefitFee DECIMAL(10,2), -- Phí đăng ký quyền lợi bổ sung nếu có
    registration_Status NVARCHAR(100) NOT NULL, -- Trạng thái đơn đăng ký: Chờ xử lý -> HopDong(Hoàn tất) | Hủy bỏ | Từ chối
	--paymentType NVARCHAR(255),	-- Hình thức thanh toán - Không nên nằm ở đây
	beneficiary_id INT,
	insurance_id INT,
	FOREIGN KEY (beneficiary_id) REFERENCES  beneficiaries(beneficiary_id),
	FOREIGN KEY (insurance_id) REFERENCES insurances(Insurance_id)
);
GO

INSERT INTO registrations (start_Date, 
							end_Date, 
							basicInsuranceFee, 
							discount, 
							totalSupplementalBenefitFee, 
							registration_Status, 
							beneficiary_id, 
							insurance_id)
	VALUES ('2024-01-01 00:00:00.000', '2025-01-01 00:00:00.000', 780000, 0, 0, N'Chờ xử lý', 7, 14)

-- Verfication - Xác nhận người dùng trước khi thay đổi password
CREATE TABLE verification_password
(
    verification_id INT PRIMARY KEY IDENTITY(1,1),
    otp_code VARCHAR(6) NOT NULL,
    created DATETIME DEFAULT GETDATE(),
    expired DATETIME,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES  users(user_id)
);
GO

--
-- Table: contracts
--

create table contracts (
	contract_id INT PRIMARY KEY IDENTITY(1,1),
	insurance_code varchar(20),
	signing_Date DATETIME DEFAULT GETDATE(),
	start_Date DATETIME NOT NULL,
	end_Date DATETIME NOT NULL,
	contract_Status NVARCHAR(100) NOT NULL,

	total_Turn INT NOT NULL,
	bonus_Fee DECIMAL (10,2),-- luon bang 0
	initial_Fee DECIMAL(10,2) NOT NULL, --Tong tien truoc discount
	discount DECIMAL(10,2),
	total_Fee DECIMAL(10,2) NOT NULL, --Tong tien sau discount
	periodic_Fee DECIMAL(10,2) NOT NULL, -- =total/total_Turn
	
	user_id INT,
	FOREIGN KEY (user_id) REFERENCES users(user_id),
	beneficiary_id INT,
	FOREIGN KEY (beneficiary_id) REFERENCES beneficiaries(beneficiary_id),
	insurance_id INT,
	FOREIGN KEY (insurance_id) REFERENCES insurances(Insurance_id),
	registration_id INT,
	FOREIGN KEY (registration_id) REFERENCES registrations(registration_id),
);
go


--
-- Table: payment request
--

CREATE TABLE payment_request (
	paymentrequest_id int identity(1,1) primary key,
	total_cost float,
	total_payment float default 0,
	description nvarchar(255),
	image_identification_url varchar(255),
	request_status varchar(25) default 'in process',
	contract_id int,
	update_date datetime default GETDATE(),
	FOREIGN KEY (contract_id) references contracts(contract_id)
)

--
-- Table: contract payment history
--
create table contract_payment_history (
	pay_con_id int primary key identity(1,1),
	payment_turn int,
	periodic_fee float,
	payment_date datetime default GETDATE(),
	payment_method nvarchar(100),
	name nvarchar(100),
	phone_number char(10),
	invoice_id nvarchar(20),
	contract_id int,
	foreign key(contract_id) references contracts(contract_id),
);
go


