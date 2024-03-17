import Image from 'next/image';
import MonashLogo from '@/public/images/MonashUniversity.png';
import UniMelbLogo from '@/public/images/UniMelb.png';
import { Card, CardBody, CardFooter, Link } from "@nextui-org/react";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-2 gap-4">
        <Card className="py-4 flex flex-col">
          <CardBody className="overflow-visible py-2 flex-grow">
            <Image
              alt="Monash University Logo"
              className="object-cover rounded-xl"
              src={MonashLogo}
              width={500}
              height={500}
            />
          </CardBody>
          <CardFooter className="text-small justify-between flex-none">
            <Link
              isExternal
              showAnchorIcon
              href="https://clubs.msa.monash.edu/joinnow/clubs-and-societies/"
              style={{ fontWeight: 'bold' }}
            >
              Find and join clubs
            </Link>
          </CardFooter>
        </Card>
        <Card className="py-4 flex flex-col">
          <CardBody className="overflow-visible py-2 flex-grow">
            <Image
              alt="University of Melbourne Logo"
              className="object-cover rounded-xl"
              src={UniMelbLogo}
              width={500}
              height={500}
            />
          </CardBody>
          <CardFooter className="text-small justify-between flex-none">
            <Link
              isExternal
              showAnchorIcon
              href="https://umsu.unimelb.edu.au/buddy-up/clubs/clubs-listing/"
              style={{ fontWeight: 'bold' }}
            >
              Find and join clubs
            </Link>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
