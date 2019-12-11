/*
SQLyog Ultimate v12.08 (64 bit)
MySQL - 5.7.17-log : Database - simple
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`simple` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `simple`;

/*Table structure for table `sp_role` */

DROP TABLE IF EXISTS `sp_role`;

CREATE TABLE `sp_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` varchar(250) DEFAULT NULL,
  `status` int(1) DEFAULT NULL COMMENT '0->启用，1->禁用',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `sp_role` */

insert  into `sp_role`(`id`,`name`,`description`,`status`) values (1,'ROLE_ADMIN','管理员',1);

/*Table structure for table `sp_student` */

DROP TABLE IF EXISTS `sp_student`;

CREATE TABLE `sp_student` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `stu_name` varchar(64) NOT NULL,
  `stu_password` varchar(64) NOT NULL,
  `sex` int(1) DEFAULT NULL COMMENT '0-男生，1-女生',
  `email` varchar(100) DEFAULT NULL,
  `stu_address` varchar(250) DEFAULT NULL,
  `status` int(1) DEFAULT NULL COMMENT '帐号启用状态：0->禁用；1->启用',
  `last_login_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

/*Data for the table `sp_student` */

insert  into `sp_student`(`id`,`stu_name`,`stu_password`,`sex`,`email`,`stu_address`,`status`,`last_login_time`) values (1,'talkyoung','talkyoung',0,'1120655294@qq.com','南京',1,'2019-12-01 10:26:35'),(2,'taoyang','taoyang',0,'taoyang@qq.com','南京江宁',1,'2019-12-11 16:30:49'),(3,'wangyang','wangyang',1,'wangyang@qq.com','安徽滁州',1,'2019-12-18 16:31:34'),(4,'zhuminghang','zhuminghang',1,'zhuminghang@qq.com','南京栖霞',1,'2019-12-07 16:32:08');

/*Table structure for table `sp_user` */

DROP TABLE IF EXISTS `sp_user`;

CREATE TABLE `sp_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(200) NOT NULL COMMENT 'username',
  `password` varchar(100) NOT NULL,
  `address` varchar(200) DEFAULT NULL,
  `phone_number` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

/*Data for the table `sp_user` */

insert  into `sp_user`(`id`,`username`,`password`,`address`,`phone_number`) values (1,'admin','123456',NULL,NULL),(2,'admin1','admin1',NULL,NULL),(3,'admin2','admin2',NULL,NULL),(4,'admin3','admin3',NULL,NULL),(5,'admin4','admin4',NULL,NULL),(6,'admin5','admin5',NULL,NULL),(7,'admin6','admin6',NULL,NULL),(8,'admin7','admin7',NULL,NULL),(9,'admin8','admin5',NULL,NULL);

/*Table structure for table `sp_user_role_relation` */

DROP TABLE IF EXISTS `sp_user_role_relation`;

CREATE TABLE `sp_user_role_relation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `role_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `sp_user_role_relation` */

insert  into `sp_user_role_relation`(`id`,`user_id`,`role_id`) values (1,1,1);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
