interface UntypedEnumItem {
	readonly Name: string;
	readonly Value: number;
}

export interface EnumItem<EnumType extends string> {
    readonly Name: string;
    readonly Value: number;
	readonly EnumType: EnumType;
	ToLuaString: () => string;
}

export type EnumItems<EnumType extends string> = EnumItem<EnumType>[]; 

export function createEnumItems<EnumType extends string>(enumType: EnumType, untypedEnumItems: UntypedEnumItem[]): EnumItems<EnumType> {
	const enumItems: EnumItems<EnumType> = [];

	untypedEnumItems.forEach(enumItem => {
		enumItems.push({
			Name: enumItem.Name,
			Value: enumItem.Value,
			EnumType: enumType,
			ToLuaString: () => `Enum.${enumType}.${enumItem.Name}`
		});
	})

	return enumItems;
}