import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { ScrollView } from "react-native-gesture-handler";

const buttons = [
  {
    label: "စပါးအဝယ် စာရင်း",
    route: "/purchase-list",
  },
  {
    label: "ဆန်ကြိတ် စာရင်း",
    route: "/milling-list",
  },
  {
    label: "ဆန်ရောင်း စာရင်း",
    route: "/sale-list",
  },
  {
    label: "လက်ကျန် စာရင်း",
    route: "/remaining-list",
  },
  {
    label: "အလုပ်သမား စာရင်း",
    route: "/employee-list",
  },
];

export default function Index() {
  return (
    <ScrollView>
      <Container>
        {buttons.map((button) => (
          <Button
            key={button.label}
            label={button.label}
            route={button.route}
          />
        ))}
      </Container>
    </ScrollView>
  );
}
