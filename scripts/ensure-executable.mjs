import { chmod } from 'node:fs/promises';

async function main() {
  const targets = process.argv.slice(2);

  await Promise.all(
    targets.map(async (target) => {
      try {
        await chmod(target, 0o755);
      } catch (error) {
        const code = error && typeof error === 'object' && 'code' in error ? error.code : '';
        if (process.platform === 'win32' || code === 'EPERM' || code === 'ENOSYS') {
          return;
        }
        throw error;
      }
    }),
  );
}

void main();
