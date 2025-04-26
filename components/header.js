'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useFavorites } from '../app/context/FavoritesContext';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function Header() {
  const router = useRouter();
  const { favorites } = useFavorites();

  return (
    <header className="bg-blue-600 w-full px-6 py-3 flex items-center justify-between">
      <Link href="/dashboard" className="flex items-center">
        <Image
          src="/starWarsLogo.png"
          alt="Star Wars"
          width={100}
          height={40}
        />
      </Link>

      <div onClick={() => router.push('/favorites')} style={{ cursor: 'pointer' }}>
        {favorites.length > 0 ? (
          <FavoriteIcon sx={{ color: 'white' }} />
        ) : (
          <FavoriteBorderIcon sx={{ color: 'white' }} />
        )}
      </div>
    </header>
  );
}
