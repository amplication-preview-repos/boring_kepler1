import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

class CheckPermissionInput {
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    userId!: string;

    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    permission!: string;
}

export { CheckPermissionInput as CheckPermissionInput };