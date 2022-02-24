# PSR-20
```php
interface ClockInterface 
{
    public function now(): DateTimeImmutable;
}
```



## Solution
```php
final class DateChecker
{
    public function __construct(private ClockInterface $clock) {}
    
    public function isInTheNextFiveMinutes(
        DatetimeImmutable $itemDate
    ): bool {
        return $itemDate > $this->clock->now() &&
               $itemDate < $this->clock->now()->add(
                   new DateInterval('PT5M')
               );
    }
}
```




```php
class DateCheckerTest
{
    public function testThatCheckerWorks($checkDate, $validateAgainst, bool $expectedResult): void {
        $checker = new DateChecker(new FixedClock($validateAgainst));
        self::assertSame($expectedResult, $checker->isInTheNextFiveMinutes($checkDate);
    }
    
    public function checkerWorksProvider(): array
    {
        return [
            [new DateTimeImmutable('2022-02-23T12:23:34'), new DateTimeImmutable('2022-02-23T12:22:34'), true],
            [new DateTimeImmutable('2022-02-23T12:22:34'), new DateTimeImmutable('2022-02-23T12:23:34'), false],
            [new DateTimeImmutable('2022-02-23T12:23:34'), new DateTimeImmutable('2022-02-23T12:17:34'), false],
        ];
    }
}
```
