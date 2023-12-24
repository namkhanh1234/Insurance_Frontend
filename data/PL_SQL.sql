
-- Store Procedure && Trigger

CREATE PROCEDURE dbo.RegisterUser
    @email NVARCHAR(255),
    @password NVARCHAR(100),
    @full_name NVARCHAR(255),
    @phone NVARCHAR(20),
	@sex NVARCHAR(5),
    @date_of_birth DATE,
    @card_identification NVARCHAR(20)
AS
BEGIN
    INSERT INTO users (email, hashed_password, full_name, phone, sex, date_of_birth, card_identification)
    VALUES (@email, HASHBYTES('SHA2_256', @password), @full_name, @phone, @sex, @date_of_birth, @card_identification);    
    -- Return entity instance after inserting
    SELECT * FROM users WHERE user_id = @@IDENTITY;
END;
GO

--SET IDENTITY_INSERT [dbo].[users] OFF

-- TEST
--INSERT INTO users (email, hashed_password,full_name, phone, sex, date_of_birth, card_identification)
--    VALUES ('abcd@gmail.com', HASHBYTES('SHA2_256', 'password_1'), N'Nguyen Vassssn A', '0969900900', 'Nam','1986-05-30', N'3526022352');

--EXEC RegisterUser 'abcd@gmail.com', 'password_1', N'Nguyen Van A', '0969900900', 'Nam','1986-05-30', N'3526022352';
 --DELETE FROM users WHERE email='nhindv@email.com';
 --select *
 --from users;

--Thêm các bản ghi vào bảng users sử dụng procedures
--EXEC RegisterUser N'tranphuong@example.com', 'password_1', N'Trần Thị Phương', N'0987654321', N'Nữ', '1992-02-15', N'3526022355';
--EXEC RegisterUser N'leminh@example.com', 'password_1', N'Lê Văn Minh', N'0123412345', N'Nam', '1985-05-30', N'3526022356';

--EXEC RegisterUser N'tranhieu@example.com', 'password_1', N'Trần Văn Hiếu', N'0912398748', N'Nam', '1994-03-04', N'3526022358';
--EXEC RegisterUser N'lehang@example.com', 'password_1', N'Lệ Hằng', N'0934514548', N'Nữ', '1985-05-30', N'3526022359';
--EXEC RegisterUser N'phamtuan@example.com', 'password_1', N'Phạm Đức Tuấn', N'0987123456', N'Nam', '1995-07-18', N'3526022360';
--GO

--kiểm tra login
/*
DROP PROCEDURE dbo.CheckLogin; 
GO
*/
CREATE PROCEDURE dbo.CheckLogin
    @Email NVARCHAR(50),
    @password NVARCHAR(100)
AS
BEGIN
    SET NOCOUNT ON;
    DECLARE @HashedPassword VARBINARY(32)
    SET @HashedPassword = HASHBYTES('SHA2_256', @Password);    
    BEGIN
        SELECT * FROM users WHERE Email IN
        (SELECT email FROM users WHERE email = @Email AND hashed_password = @HashedPassword);
    END    
END;
GO

-- EXEC dbo.CheckLogin N'phamtuan@example.com', 'password_4';
--EXEC dbo.CheckLogin N'lehang@example.com', 'password_1';
--select * from tokens;


-- Procedure get insurance based on FromAge && ToAge
CREATE PROCEDURE dbo.GetInsurances
    @fromAge INT,
    @toAge INT
AS
BEGIN
	declare @average FLOAT
	SET @average = (@fromAge + @toAge)/2
	-- Nghĩ được cách nào tối ưu làm thêm
	--print('Average '+ cast(@average as varchar(10)))

	SELECT *
	FROM dbo.insurances
	WHERE FromAge <= @average and @average <= ToAge;
	--WHERE FromAge = @fromAge and ToAge = @toAge
END;
GO

--EXEC dbo.GetInsurances 0, 0;
--EXEC dbo.GetInsurances 4, 6;
--EXEC dbo.GetInsurances 7, 9;
--EXEC dbo.GetInsurances 10, 18;
--EXEC dbo.GetInsurances 19, 30;
--EXEC dbo.GetInsurances 31, 40;


--
-- Procedure create beneficiary
-- 

CREATE PROCEDURE dbo.CreateBeneficiary
    @email NVARCHAR(255),
    @full_name NVARCHAR(255),
    @phone NVARCHAR(20),
	@sex NVARCHAR(5),
    @date_of_birth DATE,
    @card_identification NVARCHAR(20),
	@image_identification_url VARCHAR(255),
	@address NVARCHAR(255),
	@relationship_policyholder NVARCHAR(100),
	@user_id INT
AS
BEGIN
    INSERT INTO beneficiaries (email, full_name, phone, sex, date_of_birth, card_identification, image_identification_url, address, relationship_policyholder, user_id)
    VALUES (
		@email, 
		@full_name, 
		@phone, 
		@sex, 
		@date_of_birth,
		@card_identification,
		@image_identification_url,
		@address,
		@relationship_policyholder,
		@user_id);

    -- Return entity instance after inserting
    SELECT * FROM beneficiaries WHERE beneficiary_id = @@IDENTITY;
END;
GO

--EXEC dbo.CreateBeneficiary 'phamhien@gmail.com', N'Phạm Hiển', '0987123001', 'Nam', '2020-12-06', '3526022360', null, N'Thủ Đức', N'Con/cái', 8

--
-- Procuder đăng ký gói bảo hiểm
-- 
CREATE PROCEDURE dbo.ResgistrationInsurance
   @start_Date DATETIME,
   @end_Date DATETIME,
   @basicInsuranceFee DECIMAL(10,2),
   @discount DECIMAL(5,2),
   @totalSupplementalBenefitFee DECIMAL(10,2),
   @beneficiary_id INT,
   @insurance_id INT
AS
BEGIN
    INSERT INTO registrations (start_Date, 
							end_Date, 
							basicInsuranceFee, 
							discount, 
							totalSupplementalBenefitFee, 
							registration_Status, 
							beneficiary_id, 
							insurance_id)
	VALUES (@start_Date, @end_Date, @basicInsuranceFee, @discount, @totalSupplementalBenefitFee, N'Chờ xử lý', @beneficiary_id, @insurance_id)

    -- Return entity instance after inserting
    SELECT * FROM registrations WHERE registration_id = @@IDENTITY;
END;
GO

--EXEC dbo.ResgistrationInsurance '2024-01-01 00:00:00.000', '2025-01-01 00:00:00.000', 390000, 0, 0, 1, 7


--
-- Procedure insert Verfication_Password
-- 

CREATE PROCEDURE dbo.VerificationPassword
	@otp_code VARCHAR(6),
	@expired DATETIME,
	@user_id INT
AS
BEGIN
    INSERT INTO verification_password(otp_code, expired, user_id)
	VALUES 
		(@otp_code, @expired, @user_id)

    -- Return entity instance after inserting
    SELECT * FROM verification_password WHERE verification_id = @@IDENTITY;
END;
GO

select * 
from verification_password
where user_id = 9
order by expired desc;


--
-- Procedure reset Password by user_id
-- 

CREATE PROCEDURE dbo.ResetPassword
	@user_id INT,
	@newPassword NVARCHAR(100)
AS
BEGIN
    DECLARE @HashedPassword VARBINARY(32)
    SET @HashedPassword = HASHBYTES('SHA2_256', @newPassword);    
    BEGIN
        UPDATE dbo.users
		SET hashed_password = @HashedPassword where user_id = @user_id

		--SELECT * FROM users WHERE user_id = @user_id;
    END
END;
GO

--EXEC dbo.ResetPassword 9, 'password_1'


--
-- Procedure add Contract
--

create PROCEDURE AddContract
	@startdate datetime,
	@end_date datetime,
	@registion_id int,
	@beneficiary_id int,
	@insurance_id int,
	@initial_fee decimal,
	@discount decimal, 
	@total_fee decimal,
	@periodic_fee decimal,
	@user_id int,
	@total_turn int
as
begin
	insert into contracts (
			start_date,
			end_date,
			contract_Status,
			total_Turn,
			bonus_Fee, 
			initial_Fee,
			discount,
			total_Fee,
			periodic_Fee,
			user_id,
			beneficiary_id,
			insurance_id,
			registration_id) 
	values (@startdate, @end_date, N'Chưa thanh toán',@total_turn, 0, @initial_fee, @discount, @total_fee, @periodic_fee, @user_id, @beneficiary_id, @insurance_id, @registion_id)
	declare @id int = @@IDENTITY;
	declare @signDate datetime;

	select @signDate = signing_Date from contracts where contract_id = @id
	declare @insurance_code varchar(20) = FORMAT(@signDate, 'yyyyMMdd') + FORMAT(@id, '0000') 
	UPDATE contracts SET insurance_code = @insurance_code WHERE contract_id = @id;
	select * from contracts where contract_id = @id
end
go

--exec AddContract '2024-01-01', '2024-01-01', 1, 1, 1, 900, 0, 900, 900, 1, 3