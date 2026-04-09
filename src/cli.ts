import { basename } from 'node:path';
import yargs from 'yargs';
import { say, think } from './index';
import type { BubbleStyle, CatOptions } from './types';

interface CliArguments extends CatOptions {
  _: Array<string | number>;
  $0: string;
}

function stripFinalNewline(value: string): string {
  return value.replace(/(?:\r?\n)$/, '');
}

async function readStdin(): Promise<string> {
  if (process.stdin.isTTY) {
    return '';
  }

  const chunks: Buffer[] = [];

  for await (const chunk of process.stdin) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }

  return Buffer.concat(chunks).toString('utf8');
}

function parseArguments(): CliArguments {
  return yargs(process.argv.slice(2))
    .usage(
      '$0 [-M mouth_string] [-E eye_string] [-C cat_name_string] [-B bubble_style_string] [-W max_width_number] text',
    )
    .options({
      M: {
        default: 'm',
        type: 'string',
      },
      E: {
        default: '@',
        type: 'string',
      },
      C: {
        default: 'q',
        type: 'string',
      },
      B: {
        default: 'box' as BubbleStyle,
        choices: ['box', 'topAndBottomLine'],
        type: 'string',
      },
      W: {
        default: 40,
        type: 'number',
      },
      maxWidth: {
        default: 40,
        type: 'number',
      },
    })
    .alias('W', 'maxWidth')
    .describe({
      M: 'mouth of the cat',
      E: 'eye of the cat',
      C: 'which cat to display',
      B: 'style of bubble',
      W: 'max bubble line width',
    })
    .help()
    .alias('h', 'help')
    .parseSync() as CliArguments;
}

export async function main(): Promise<void> {
  const argv = parseArguments();
  const command = basename(process.argv[1] || argv.$0 || 'catsay');
  const run = command === 'catthink' ? think : say;

  if (argv._.length > 0) {
    console.log(run(argv._.join(' '), argv));
    return;
  }

  const data = stripFinalNewline(await readStdin());

  if (data) {
    console.log(run(data, argv));
  }
}

void main();
