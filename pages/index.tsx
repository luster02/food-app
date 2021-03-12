import Template from "@components/app/Template";
import Wellcome from '@components/home/wellcome'
import Main from '@components/home/wellcome/main'
import { useState } from "react";

export default function Home() {
  const [switchContent, setSwitchContent] = useState(false)

  return (
    <Template>
      {switchContent
        ? <Main setSwitchContent={setSwitchContent} />
        : <Wellcome setSwitchContent={setSwitchContent} />
      }
    </Template>
  )
}