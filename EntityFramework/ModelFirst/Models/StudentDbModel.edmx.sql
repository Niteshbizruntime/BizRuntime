
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 04/03/2018 16:55:32
-- Generated from EDMX file: E:\C#.Net Program\DatabaseFirst\ModelFirst\Models\StudentDbModel.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [RecordContext];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------


-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------


-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'TblStudents'
CREATE TABLE [dbo].[TblStudents] (
    [StudentId] int IDENTITY(1,1) NOT NULL,
    [StudentName] nvarchar(max)  NOT NULL,
    [Pnone] nvarchar(max)  NOT NULL,
    [Address] nvarchar(max)  NOT NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [StudentId] in table 'TblStudents'
ALTER TABLE [dbo].[TblStudents]
ADD CONSTRAINT [PK_TblStudents]
    PRIMARY KEY CLUSTERED ([StudentId] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------