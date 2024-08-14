package org.themohit.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.themohit.model.Subscription;

@Repository
public interface SubscriptionRepo extends JpaRepository<Subscription,Long> {
    Subscription findByUserId(long userId);
}
