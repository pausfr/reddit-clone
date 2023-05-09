import BaseEntity from "./Entity";
import {
  Entity,
  Index,
  ManyToOne,
  JoinColumn,
  OneToMany,
  Column,
} from "typeorm";
import User from "./User";

@Entity("comments")
export default class Comment extends BaseEntity {}
