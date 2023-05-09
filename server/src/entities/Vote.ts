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

@Entity("votes")
export default class Vote extends BaseEntity {}
