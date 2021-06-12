import { validate } from "joiful";
import { ValidationError } from "../../utils/validators";

export default class Input {
  public validate(): [boolean, ValidationError] {
    const { error } = validate(this);

    if (error) {
      return [true, error];
    }

    return [false, null];
  }
}
