
-- CREATE DATABASE
IF EXISTS(SELECT * FROM sys.databases WHERE name = 'DB_Insurance')
BEGIN
  DROP DATABASE DB_Insurance;
END
GO
CREATE DATABASE DB_Insurance;

GO
USE DB_Insurance;
GO


--
-- Table users
--
IF EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[users]') AND OBJECTPROPERTY(id, N'IsUserTable') = 1)
  DROP TABLE [dbo].[users]
GO


CREATE TABLE [dbo].[users](
	[user_id] [int] IDENTITY(1,1) NOT NULL,
	[email] [nvarchar](255) NOT NULL,
	[hashed_password] [nvarchar](200) NOT NULL,
	[full_name] [nvarchar](255) NULL,
	[phone] [nvarchar](20) NOT NULL,
	[sex] [nvarchar](5) NULL,
	[date_of_birth] [date] NULL,
	[card_identification] [nvarchar](20) NOT NULL,
	[is_admin] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[user_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[users] ADD  DEFAULT ((0)) FOR [is_admin]
GO



--
-- Table token
--
IF EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[tokens]') AND OBJECTPROPERTY(id, N'IsUserTable') = 1)
  DROP TABLE [dbo].[tokens]
GO

CREATE TABLE [dbo].[tokens](
	[token_id] [int] IDENTITY(1,1) NOT NULL,
	[token] [varchar](255) NOT NULL,
	[created] [datetime] NULL,
	[expired] [datetime] NULL,
	[user_id] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[token_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[tokens]  WITH CHECK ADD FOREIGN KEY([user_id])
REFERENCES [dbo].[users] ([user_id])
GO


--
-- Table verificationpassword
--
IF EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[verification_password]') AND OBJECTPROPERTY(id, N'IsUserTable') = 1)
  DROP TABLE [dbo].[verification_password]
GO

CREATE TABLE [dbo].[verification_password](
	[verification_id] [int] IDENTITY(1,1) NOT NULL,
	[otp_code] [varchar](6) NOT NULL,
	[created] [datetime] NULL,
	[expired] [datetime] NULL,
	[user_id] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[verification_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[verification_password] ADD  DEFAULT (getdate()) FOR [created]
GO

ALTER TABLE [dbo].[verification_password]  WITH CHECK ADD FOREIGN KEY([user_id])
REFERENCES [dbo].[users] ([user_id])
GO


--
-- Table beneficiaries
--
IF EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[beneficiaries]') AND OBJECTPROPERTY(id, N'IsUserTable') = 1)
  DROP TABLE [dbo].[beneficiaries]
GO

CREATE TABLE [dbo].[beneficiaries](
	[beneficiary_id] [int] IDENTITY(1,1) NOT NULL,
	[email] [nvarchar](255) NOT NULL,
	[full_name] [nvarchar](255) NOT NULL,
	[phone] [nvarchar](20) NOT NULL,
	[sex] [nvarchar](5) NOT NULL,
	[date_of_birth] [date] NOT NULL,
	[card_identification] [nvarchar](20) NOT NULL,
	[image_identification_url] [varchar](255) NULL,
	[address] [nvarchar](255) NOT NULL,
	[relationship_policyholder] [nvarchar](100) NOT NULL,
	[user_id] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[beneficiary_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[beneficiaries]  WITH CHECK ADD FOREIGN KEY([user_id])
REFERENCES [dbo].[users] ([user_id])
GO


--
-- Table insurance_types
--
IF EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[insurance_types]') AND OBJECTPROPERTY(id, N'IsUserTable') = 1)
  DROP TABLE [dbo].[insurance_types]
GO

CREATE TABLE [dbo].[insurance_types](
	[InsuranceType_ID] [int] IDENTITY(1,1) NOT NULL,
	[NameInsuranceType] [nvarchar](255) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[InsuranceType_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


--
-- Table insurances
--
IF EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[insurances]') AND OBJECTPROPERTY(id, N'IsUserTable') = 1)
  DROP TABLE [dbo].[insurances]
GO

CREATE TABLE [dbo].[insurances](
	[Insurance_ID] [int] IDENTITY(1,1) NOT NULL,
	[NameInsurance] [nvarchar](255) NOT NULL,
	[FromAge] [int] NOT NULL,
	[ToAge] [int] NOT NULL,
	[Price] [float] NOT NULL,
	[Discount] [float] NULL,
	[Status] [nvarchar](40) NULL,
	[InsuranceType_ID] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[Insurance_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[insurances] ADD  DEFAULT ((0)) FOR [Discount]
GO

ALTER TABLE [dbo].[insurances] ADD  DEFAULT ('Active') FOR [Status]
GO

ALTER TABLE [dbo].[insurances]  WITH CHECK ADD FOREIGN KEY([InsuranceType_ID])
REFERENCES [dbo].[insurance_types] ([InsuranceType_ID])
GO

ALTER TABLE [dbo].[insurances]  WITH CHECK ADD CHECK  (([discount]>=(0)))
GO

ALTER TABLE [dbo].[insurances]  WITH CHECK ADD CHECK  (([price]>(0)))
GO


--
-- Table benefit_types
--
IF EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[benefit_types]') AND OBJECTPROPERTY(id, N'IsUserTable') = 1)
  DROP TABLE [dbo].[benefit_types]
GO

CREATE TABLE [dbo].[benefit_types](
	[BenefitType_ID] [int] IDENTITY(1,1) NOT NULL,
	[NameBenefitType] [nvarchar](255) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[BenefitType_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


--
-- Table benefits
--
IF EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[benefits]') AND OBJECTPROPERTY(id, N'IsUserTable') = 1)
  DROP TABLE [dbo].[benefits]
GO

CREATE TABLE [dbo].[benefits](
	[Benefit_ID] [int] IDENTITY(1,1) NOT NULL,
	[NameBenefit] [nvarchar](255) NOT NULL,
	[Period] [nvarchar](50) NULL,
	[BenefitType_ID] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[Benefit_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[benefits]  WITH CHECK ADD FOREIGN KEY([BenefitType_ID])
REFERENCES [dbo].[benefit_types] ([BenefitType_ID])
GO


--
-- Table benefit_details
--
IF EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[benefit_details]') AND OBJECTPROPERTY(id, N'IsUserTable') = 1)
  DROP TABLE [dbo].[benefit_details]
GO

CREATE TABLE [dbo].[benefit_details](
	[Insurance_ID] [int] NOT NULL,
	[Benefit_ID] [int] NOT NULL,
	[ClaimSettlementFee] [int] NULL,
 CONSTRAINT [PK_BENEFIT_DETAILS] PRIMARY KEY CLUSTERED 
(
	[Benefit_ID] ASC,
	[Insurance_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[benefit_details]  WITH CHECK ADD FOREIGN KEY([Benefit_ID])
REFERENCES [dbo].[benefits] ([Benefit_ID])
GO

ALTER TABLE [dbo].[benefit_details]  WITH CHECK ADD FOREIGN KEY([Insurance_ID])
REFERENCES [dbo].[insurances] ([Insurance_ID])
GO


--
-- Table registrations
--
IF EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[registrations]') AND OBJECTPROPERTY(id, N'IsUserTable') = 1)
  DROP TABLE [dbo].[registrations]
GO

CREATE TABLE [dbo].[registrations](
	[registration_id] [int] IDENTITY(1,1) NOT NULL,
	[registration_Date] [datetime] NOT NULL,
	[start_Date] [datetime] NOT NULL,
	[end_Date] [datetime] NOT NULL,
	[basicInsuranceFee] [decimal](10, 2) NOT NULL,
	[discount] [decimal](5, 2) NOT NULL,
	[totalSupplementalBenefitFee] [decimal](10, 2) DEFAULT 0,
	[registration_Status] [nvarchar](100) NOT NULL DEFAULT N'Chờ xử lý', -- Chờ xử lý | Đã lập hợp đồng
	[beneficiary_id] [int] NOT NULL,
	[insurance_id] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[registration_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


ALTER TABLE [dbo].[registrations] ADD  DEFAULT (getdate()) FOR [registration_Date]
GO

ALTER TABLE [dbo].[registrations] ADD  DEFAULT ((0)) FOR [discount]
GO

ALTER TABLE [dbo].[registrations]  WITH CHECK ADD FOREIGN KEY([beneficiary_id])
REFERENCES [dbo].[beneficiaries] ([beneficiary_id])
GO

ALTER TABLE [dbo].[registrations]  WITH CHECK ADD FOREIGN KEY([insurance_id])
REFERENCES [dbo].[insurances] ([Insurance_ID])
GO


--
-- Table contracts
--
IF EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[contracts]') AND OBJECTPROPERTY(id, N'IsUserTable') = 1)
  DROP TABLE [dbo].[contracts]
GO

CREATE TABLE [dbo].[contracts](
	[contract_id] [int] IDENTITY(1,1) NOT NULL,
	[insurance_code] [varchar](20) NULL,
	[signing_Date] [datetime] NULL,
	[start_Date] [datetime] NOT NULL,
	[end_Date] [datetime] NOT NULL,
	[contract_Status] [nvarchar](100) NOT NULL,
	[total_Turn] [int] NOT NULL,
	[bonus_Fee] [decimal](10, 2) NULL,
	[initial_Fee] [decimal](10, 2) NOT NULL,
	[discount] [decimal](10, 2) NULL,
	[total_Fee] [decimal](10, 2) NOT NULL,
	[periodic_Fee] [decimal](10, 2) NOT NULL,
	[user_id] [int] NULL,
	[beneficiary_id] [int] NULL,
	[registration_id] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[contract_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[contracts] ADD  DEFAULT (getdate()) FOR [signing_Date]
GO

ALTER TABLE [dbo].[contracts]  WITH CHECK ADD FOREIGN KEY([beneficiary_id])
REFERENCES [dbo].[beneficiaries] ([beneficiary_id])
GO


ALTER TABLE [dbo].[contracts]  WITH CHECK ADD FOREIGN KEY([registration_id])
REFERENCES [dbo].[registrations] ([registration_id])
GO

ALTER TABLE [dbo].[contracts]  WITH CHECK ADD FOREIGN KEY([user_id])
REFERENCES [dbo].[users] ([user_id])
GO


--
-- Table payment_request
--
IF EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[payment_request]') AND OBJECTPROPERTY(id, N'IsUserTable') = 1)
  DROP TABLE [dbo].[payment_request]
GO

CREATE TABLE [dbo].[payment_request](
	[paymentrequest_id] [int] IDENTITY(1,1) NOT NULL,
	[total_cost] [float] NULL,
	[total_payment] [float] NULL,
	[description] [nvarchar](255) NULL,
	[image_identification_url] [varchar](255) NULL,
	[request_status] [nvarchar](25) NULL,
	[contract_id] [int] NULL,
	[update_date] [datetime] NULL
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[payment_request] ADD  DEFAULT ((0)) FOR [total_payment]
GO

ALTER TABLE [dbo].[payment_request] ADD  DEFAULT ('') FOR [image_identification_url]
GO

ALTER TABLE [dbo].[payment_request] ADD  DEFAULT (N'Chờ xử lý') FOR [request_status]
GO

ALTER TABLE [dbo].[payment_request] ADD  DEFAULT (getdate()) FOR [update_date]
GO

ALTER TABLE [dbo].[payment_request]  WITH CHECK ADD  CONSTRAINT [FK_PaymentRequest_Contract] FOREIGN KEY([contract_id])
REFERENCES [dbo].[contracts] ([contract_id])
GO

ALTER TABLE [dbo].[payment_request] CHECK CONSTRAINT [FK_PaymentRequest_Contract]
GO

--
-- Table contract_payment_history
--
IF EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[Contract_payment_histories]') AND OBJECTPROPERTY(id, N'IsUserTable') = 1)
  DROP TABLE [dbo].[contract_payment_history]
GO

CREATE TABLE [dbo].[contract_payment_histories](
	[paymentcontract_Id] [int] IDENTITY(1,1) NOT NULL,
	[transaction_Code] [varchar](25) NULL,
	[payment_Date] [datetime] NULL,
	[payment_Amount] [int] NULL,
	[service_Payment] [varchar](20) NULL,
	[bank_Name] [nvarchar](50) NULL,
	[status] [nvarchar](30) NULL,
	[contract_Id] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[paymentcontract_Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[contract_payment_histories] ADD  DEFAULT (getdate()) FOR [payment_Date]
GO

ALTER TABLE [dbo].[contract_payment_histories] ADD  DEFAULT (N'Chờ thanh toán') FOR [status]
GO

ALTER TABLE [dbo].[contract_payment_histories]  WITH CHECK ADD  CONSTRAINT [FK_ContractPaymentHistory_Contract] FOREIGN KEY([contract_Id])
REFERENCES [dbo].[contracts] ([contract_id])
GO

ALTER TABLE [dbo].[contract_payment_histories] CHECK CONSTRAINT [FK_ContractPaymentHistory_Contract]
GO
