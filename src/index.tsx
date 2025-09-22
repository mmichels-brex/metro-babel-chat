import { Text, View } from "react-native";
import "../global.css"
import type { JSX } from 'react';

export function MyComponent(): JSX.Element {
    return (
        <View className="bg-amber-500">
            <Text className="text-brex-blue">Hello world</Text>
        </View>
    )
}