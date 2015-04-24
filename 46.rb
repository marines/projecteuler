#!/bin/ruby
require 'prime'

p "gen primes"
primes = Prime.take(99999)

p "count"
(33..99999999999999).step(2).each {|odd|
	possible = 0
	primes.each{|prime|
		(0..Math.sqrt(odd).ceil).each{|base|
			if (prime + 2*base**2 == odd)
				possible = 1
				break
			end 
		}
		break if possible == 1
	}

	if possible == 1
		p "#{odd} is possible"
	else
		p "#{odd} not possible"
		break
	end
}
