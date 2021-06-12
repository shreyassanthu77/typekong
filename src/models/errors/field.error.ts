import { Field, ObjectType } from "type-graphql";
import { ValidationError } from "../../utils/validators";

@ObjectType()
export default class FieldError {
  @Field()
  field: string;

  @Field()
  message: string;

  static fromJoiError(error: ValidationError): FieldError {
    const [field, ...message] = error.message.split(" ");

    const err = new FieldError();
    err.field = field.replaceAll('"', "");
    err.message = message.join(" ");

    return err;
  }
}
