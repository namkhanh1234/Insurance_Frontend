
GO
USE DB_Insurance
GO

--
-- PROCEDURE RegisterUser
--
/*
DROP PROCEDURE dbo.RegisterUser; 
GO
*/

CREATE PROCEDURE [dbo].[RegisterUser]
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

--Thêm các bản ghi vào bảng users sử dụng procedures
EXEC RegisterUser N'nam608072@gmail.com', 'password_1', N'Mai Nhật Nam', N'0969958958', N'Nam', '2002-01-15', N'352606993';
EXEC RegisterUser N'namkhanh16052002@gmail.com', 'password_1', N'Nguyễn Đặng Nam Khánh', N'0969958959', N'Nam', '2002-02-25', N'352606804';
EXEC RegisterUser N'nguyendoanvannhi20@gmail.com', 'password_1', N'Nguyễn Đoàn Vân Nhi', N'0969958960', N'Nữ', '2002-06-18', N'352606702';
EXEC RegisterUser N'anhkhoaphamnhat@gmail.com', 'password_1', N'Nguyễn Phạm Anh Khoa', N'0969958962', N'Nam', '2002-04-20', N'352606602';
EXEC RegisterUser N'rename0209@gmail.com', 'password_1', N'Phạm Quốc Hùng', N'0969958964', N'Nam', '2002-03-08', N'352606502';
GO

--
-- PROCEDURE CheckLogin
--
/*
DROP PROCEDURE dbo.CheckLogin; 
GO
*/

CREATE PROCEDURE [dbo].[CheckLogin]
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

--EXEC dbo.CheckLogin N'nam608072@gmail.com', 'password_1';


--
-- PROCEDURE CreateBeneficiary
--
/*
DROP PROCEDURE dbo.CreateBeneficiary; 
GO
*/

--CREATE PROCEDURE [dbo].[CreateBeneficiary]
--    @email NVARCHAR(255),
--    @full_name NVARCHAR(255),
--    @phone NVARCHAR(20),
--	@sex NVARCHAR(5),
--    @date_of_birth DATE,
--    @card_identification NVARCHAR(20),
--	@image_identification_url VARCHAR(255),
--	@address NVARCHAR(255),
--	@relationship_policyholder NVARCHAR(100),
--	@user_id INT
--AS
--BEGIN
--    INSERT INTO beneficiaries (email, 
--								full_name, 
--								phone, 
--								sex, 
--								date_of_birth, 
--								card_identification, 
--								image_identification_url, 
--								address, 
--								relationship_policyholder, 
--								user_id)
--    VALUES (
--		@email, 
--		@full_name, 
--		@phone, 
--		@sex, 
--		@date_of_birth,
--		@card_identification,
--		@image_identification_url,
--		@address,
--		@relationship_policyholder,
--		@user_id);    

--    -- Return entity instance after inserting
--    SELECT * FROM beneficiaries WHERE beneficiary_id = @@IDENTITY;
--END;
--GO


--
-- PROCEDURE ResgistrationInsurance
--
/*
DROP PROCEDURE dbo.ResgistrationInsurance; 
GO
*/

CREATE PROCEDURE [dbo].[ResgistrationInsurance]
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

EXEC [dbo].[ResgistrationInsurance] '2024-01-01', '2025-12-31', 390000.00, 0, 0, 1, 6

--
-- PROCEDURE VerificationPassword
--
/*
DROP PROCEDURE dbo.VerificationPassword; 
GO
*/

CREATE PROCEDURE [dbo].[VerificationPassword]
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


-- PROCEDURE ResetPassword
--
/*
DROP PROCEDURE dbo.ResetPassword; 
GO
*/

CREATE PROCEDURE [dbo].[ResetPassword]
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


-- PROCEDURE AddContract
--
/*
DROP PROCEDURE dbo.AddContract; 
GO
*/

create PROCEDURE [dbo].[AddContract]
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
GO


-- PROCEDURE AddPaymentRequest
--
/*
DROP PROCEDURE dbo.AddPaymentRequest; 
GO
*/

CREATE PROCEDURE [dbo].[AddPaymentRequest] 
	@contract_id int, 
	@totalcost float, 
	@description nvarchar(255), 
	@image nvarchar(255) = null
as
begin
	Insert into payment_request (
					total_cost, 
					description, 
					image_identification_url, 
					contract_id)
	values
		(@totalcost, @description, @image, @contract_id)

	select * from payment_request where paymentrequest_id = @@IDENTITY
end
GO

CREATE PROCEDURE UpdateRegistrationStatus
	@id int,
	@status nvarchar(100)
as
begin
	update registrations set registration_Status = @status where registration_id = @id
	select * from registrations where registration_id = @id
end
go

--exec UpdateRegistrationStatus 1, N'Đã lập hợp đồng'


--exec CreateBeneficiary 'example@gmail.com', 'No Name', '123456789', 'Nam', '2002-01-15', '352606993', null, 'Thu Duc', 'Bản Thân', 1
--exec ResgistrationInsurance  '2023-01-15', '2024-01-15', 123456, 0, 1234, 1, 1
--exec AddContract '2023-01-15', '2024-01-15', 1, 1, 1, 123456, 0, 123456, 123, 1, 1